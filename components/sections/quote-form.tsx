'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/config';

const requiredFields = {
  fullName: 'Enter your full name.',
  organisation: 'Enter your company or institution.',
  email: 'Enter your email address.',
  phone: 'Enter a phone number.',
  service: 'Choose a service.',
  specifications: 'Describe the products or printing you need.',
  quantities: 'Enter an estimated quantity.',
  destination: 'Enter the delivery destination.',
  requiredDate: 'Choose a required date.',
};

type FieldName = keyof typeof requiredFields | 'document' | 'notes';
type Errors = Partial<Record<FieldName, string>>;
type ControlProps = {
  id: FieldName;
  name: FieldName;
  required: boolean;
  'aria-invalid'?: true;
  'aria-describedby'?: string;
};

const fileTypes: Record<string, string> = {
  pdf: 'application/pdf',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};

const dateFormatter = new Intl.DateTimeFormat('en-ZA', {
  timeZone: 'Africa/Johannesburg',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

function todayInPretoria() {
  const parts = dateFormatter.formatToParts(new Date());
  return ['year', 'month', 'day'].map(part => parts.find(entry => entry.type === part)?.value).join('-');
}

function documentError(file: File | null | undefined) {
  if (!file?.name) return;
  const extension = file.name.split('.').pop()?.toLowerCase();
  const expectedType = extension && fileTypes[extension];

  if (!expectedType || (file.type && file.type !== 'application/octet-stream' && file.type !== expectedType)) {
    return 'Choose a PDF, DOCX or XLSX document.';
  }
  if (file.size === 0) return 'Choose a document with content.';
  if (file.size > 10 * 1024 * 1024) return 'Choose a document of 10 MB or less.';
}

function Field({
  name,
  label,
  hint,
  errors,
  wide,
  children,
}: {
  name: FieldName;
  label: string;
  hint?: string;
  errors: Errors;
  wide?: boolean;
  children: (props: ControlProps) => ReactNode;
}) {
  const error = errors[name];
  const description = [hint && `${name}-hint`, error && `${name}-error`].filter(Boolean).join(' ');
  const required = name in requiredFields;

  return (
    <div className={`quote-field${wide ? ' quote-field-wide' : ''}`}>
      <label htmlFor={name}>
        {label}
        {!required && <span> (optional)</span>}
      </label>
      {hint && <p id={`${name}-hint`} className="field-hint">{hint}</p>}
      {children({
        id: name,
        name,
        required,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': description || undefined,
      })}
      {error && <p className="field-error" id={`${name}-error`}>{error}</p>}
    </div>
  );
}

export function QuoteForm({ selectedService }: { selectedService: string }) {
  const [earliestDate, setEarliestDate] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState<'invalid' | 'valid' | null>(null);
  const confirmation = useRef<HTMLParagraphElement>(null);

  useEffect(() => { setEarliestDate(todayInPretoria()); }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: FieldName) => String(data.get(name) ?? '').trim();
    const validation: Errors = {};

    for (const name of Object.keys(requiredFields) as (keyof typeof requiredFields)[]) {
      if (!value(name)) validation[name] = requiredFields[name];
    }
    const email = form.elements.namedItem('email') as HTMLInputElement;
    if (value('email') && email.validity.typeMismatch) {
      validation.email = 'Enter a valid email address.';
    }
    const phone = value('phone');
    const digits = phone.replace(/\D/g, '').length;
    if (phone && (!/^[+0-9() .-]+$/.test(phone) || digits < 7 || digits > 15)) {
      validation.phone = 'Enter a valid phone number with 7 to 15 digits.';
    }
    if (value('service') && !services.some(service => service.slug === value('service'))) {
      validation.service = requiredFields.service;
    }
    if (value('requiredDate') && value('requiredDate') < todayInPretoria()) {
      validation.requiredDate = 'Choose today or a future date.';
    }
    const document = data.get('document');
    const error = documentError(document instanceof File ? document : null);
    if (error) validation.document = error;

    const hasErrors = Object.keys(validation).length > 0;
    setErrors(validation);
    setFeedback(hasErrors ? 'invalid' : 'valid');

    requestAnimationFrame(() => {
      if (hasErrors) form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      else confirmation.current?.focus();
    });
  }

  return (
    <form
      id="quote-form"
      className="quote-form"
      noValidate
      onSubmit={handleSubmit}
      onChange={event => {
        const control = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        const name = control.name as FieldName;
        setErrors(current => {
          const error = control instanceof HTMLInputElement && control.type === 'file'
            ? documentError(control.files?.[0])
            : undefined;
          return current[name] === error ? current : { ...current, [name]: error };
        });
        setFeedback(null);
      }}
    >
      <p className="form-notice"><strong>Demo form</strong> · Checks your details locally in this browser.</p>

      <fieldset>
        <legend>Your details</legend>
        <div className="form-grid">
          <Field name="fullName" label="Full name" errors={errors}>
            {props => <input {...props} autoComplete="name" maxLength={120} />}
          </Field>
          <Field name="organisation" label="Company or institution" errors={errors}>
            {props => <input {...props} autoComplete="organization" maxLength={160} />}
          </Field>
          <Field name="email" label="Email" errors={errors}>
            {props => <input {...props} type="email" autoComplete="email" maxLength={254} />}
          </Field>
          <Field name="phone" label="Phone" errors={errors}>
            {props => <input {...props} type="tel" autoComplete="tel" maxLength={30} />}
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend>Supply requirements</legend>
        <div className="form-grid">
          <Field name="service" label="Service required" errors={errors}>
            {props => (
              <select {...props} defaultValue={selectedService}>
                <option value="" disabled>Choose a service</option>
                {services.map(service => <option key={service.slug} value={service.slug}>{service.title}</option>)}
              </select>
            )}
          </Field>
          <Field name="quantities" label="Estimated quantities" errors={errors}>
            {props => <input {...props} placeholder="e.g. 250 reams of A4 paper" maxLength={180} />}
          </Field>
          <Field name="specifications" label="Product specifications" errors={errors} wide>
            {props => <textarea {...props} rows={4} maxLength={2400} placeholder="Include sizes, materials, finishes or a list of items." />}
          </Field>
          <Field name="destination" label="Delivery destination" errors={errors}>
            {props => <input {...props} placeholder="City or suburb and postal code" maxLength={200} />}
          </Field>
          <Field name="requiredDate" label="Required date" errors={errors}>
            {props => <input {...props} type="date" min={earliestDate || undefined} />}
          </Field>
          <Field name="document" label="Supporting document" hint="PDF, DOCX or XLSX · Up to 10 MB" errors={errors} wide>
            {props => <input {...props} type="file" accept=".pdf,.docx,.xlsx" />}
          </Field>
          <Field name="notes" label="Additional notes" errors={errors} wide>
            {props => <textarea {...props} rows={3} maxLength={2000} />}
          </Field>
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="action-link action-solid" disabled={!earliestDate}>
          Check quote request
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} />
        </button>
        <p ref={confirmation} tabIndex={-1} role="status" className="form-feedback" data-feedback={feedback}>
          {feedback === 'valid' && 'Demo check complete. Your details and files stayed in this browser.'}
          {feedback === 'invalid' && 'Check the highlighted fields and try again.'}
        </p>
      </div>
    </form>
  );
}
