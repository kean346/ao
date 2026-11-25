'use client';

import { useEffect, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/config';

import { documentError, quoteErrors, requiredFields, textLimits, todayInPretoria } from '@/lib/quote';
import type { Errors, FieldName } from '@/lib/quote';
import { submitQuote } from '@/app/contact/submit-quote';

type ControlProps = {
  id: FieldName;
  name: FieldName;
  required: boolean;
  'aria-invalid'?: true;
  'aria-describedby'?: string;
};

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

export function QuoteForm({ selectedService, deliveryEnabled }: { selectedService: string; deliveryEnabled: boolean }) {
  const [earliestDate, setEarliestDate] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [feedback, setFeedback] = useState<'invalid' | 'valid' | 'sent' | 'failed' | null>(null);
  const busy = useRef(false);
  const [sending, setSending] = useState(false);
  const confirmation = useRef<HTMLParagraphElement>(null);

  useEffect(() => { setEarliestDate(todayInPretoria()); }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || feedback === 'sent') return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const validation = quoteErrors(data);

    function highlight(errors: Errors) {
      setErrors(errors);
      setFeedback('invalid');
      requestAnimationFrame(() => form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus());
    }

    if (Object.keys(validation).length) {
      highlight(validation);
      return;
    }

    setErrors({});
    if (deliveryEnabled) {
      busy.current = true;
      setSending(true);
      try {
        const result = await submitQuote(data);
        if (result.status === 'invalid') {
          highlight(result.errors);
          return;
        }
        setFeedback(result.status);
      } catch {
        setFeedback('failed');
      } finally {
        busy.current = false;
        setSending(false);
      }
    } else {
      setFeedback('valid');
    }
    requestAnimationFrame(() => confirmation.current?.focus());
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
      {!deliveryEnabled && <p className="form-notice">Quote delivery is awaiting setup. You can check your request here before sending enquiries opens.</p>}

      <fieldset disabled={sending}>
        <legend>Your details</legend>
        <div className="form-grid">
          <Field name="fullName" label="Full name" errors={errors}>
            {props => <input {...props} autoComplete="name" maxLength={textLimits.fullName} />}
          </Field>
          <Field name="organisation" label="Company or institution" errors={errors}>
            {props => <input {...props} autoComplete="organization" maxLength={textLimits.organisation} />}
          </Field>
          <Field name="email" label="Email" errors={errors}>
            {props => <input {...props} type="email" autoComplete="email" maxLength={textLimits.email} />}
          </Field>
          <Field name="phone" label="Phone" errors={errors}>
            {props => <input {...props} type="tel" autoComplete="tel" maxLength={textLimits.phone} />}
          </Field>
        </div>
      </fieldset>

      <fieldset disabled={sending}>
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
            {props => <input {...props} placeholder="e.g. 250 reams of A4 paper" maxLength={textLimits.quantities} />}
          </Field>
          <Field name="specifications" label="Product specifications" errors={errors} wide>
            {props => <textarea {...props} rows={4} maxLength={textLimits.specifications} placeholder="Include sizes, materials, finishes or a list of items." />}
          </Field>
          <Field name="destination" label="Delivery destination" errors={errors}>
            {props => <input {...props} placeholder="City or suburb and postal code" maxLength={textLimits.destination} />}
          </Field>
          <Field name="requiredDate" label="Required date" errors={errors}>
            {props => <input {...props} type="date" min={earliestDate || undefined} />}
          </Field>
          <Field name="document" label="Supporting document" hint="PDF, DOCX or XLSX · Up to 10 MB" errors={errors} wide>
            {props => <input {...props} type="file" accept=".pdf,.docx,.xlsx" />}
          </Field>
          <Field name="notes" label="Additional notes" errors={errors} wide>
            {props => <textarea {...props} rows={3} maxLength={textLimits.notes} />}
          </Field>
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="action-link action-solid" disabled={!earliestDate || sending || feedback === 'sent'}>
          {sending ? 'Sending…' : deliveryEnabled ? 'Send quote request' : 'Check quote request'}
          <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.6} />
        </button>
        <p ref={confirmation} tabIndex={-1} role="status" className="form-feedback" data-feedback={feedback}>
          {feedback === 'valid' && 'Your request is ready. Delivery is pending and your details are still in this browser.'}
          {feedback === 'sent' && 'Your quote request has been sent to AO Enterprises.'}
          {feedback === 'failed' && 'Delivery could not be confirmed. Your details are still here.'}
          {feedback === 'invalid' && 'Check the highlighted fields and try again.'}
        </p>
      </div>
    </form>
  );
}
