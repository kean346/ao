import { services } from '@/lib/config';

export const requiredFields = {
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

export type FieldName = keyof typeof requiredFields | 'document' | 'notes';
export type Errors = Partial<Record<FieldName, string>>;
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

export function todayInPretoria() {
  const parts = dateFormatter.formatToParts(new Date());
  return ['year', 'month', 'day'].map(part => parts.find(entry => entry.type === part)?.value).join('-');
}

export function documentError(file: File | null | undefined) {
  if (!file?.name) return;
  const extension = file.name.split('.').pop()?.toLowerCase();
  const expectedType = extension && fileTypes[extension];

  if (!expectedType || (file.type && file.type !== 'application/octet-stream' && file.type !== expectedType)) {
    return 'Choose a PDF, DOCX or XLSX document.';
  }
  if (file.size === 0) return 'Choose a document with content.';
  if (file.size > 10 * 1024 * 1024) return 'Choose a document of 10 MB or less.';
}

export const textLimits: Record<Exclude<FieldName, 'document'>, number> = {
  fullName: 120, organisation: 160, email: 254, phone: 30, service: 100,
  specifications: 2400, quantities: 180, destination: 200, requiredDate: 10, notes: 2000,
};

export function quoteErrors(data: FormData): Errors {
  const errors: Errors = {};
  const value = (name: FieldName) => {
    const input = data.get(name);
    return typeof input === 'string' ? input.trim() : '';
  };

  for (const [name, limit] of Object.entries(textLimits)) {
    const key = name as keyof typeof textLimits;
    if (key !== 'notes' && !value(key)) errors[key] = requiredFields[key];
    if (value(key).length > limit) errors[key] = `Use ${limit} characters or fewer.`;
  }
  const email = value('email');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.';

  const phone = value('phone');
  const digits = phone.replace(/\D/g, '').length;
  if (phone && (!/^[+0-9() .-]+$/.test(phone) || digits < 7 || digits > 15)) {
    errors.phone = 'Enter a valid phone number with 7 to 15 digits.';
  }
  if (!services.some(service => service.slug === value('service'))) errors.service = requiredFields.service;
  const date = value('requiredDate');
  if (date) {
    const parsed = new Date(date + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(parsed.getTime()) ||
        parsed.toISOString().slice(0, 10) !== date || date < todayInPretoria()) {
      errors.requiredDate = 'Choose today or a future date.';
    }
  }
  const attachment = data.get('document');
  if (attachment && typeof attachment !== 'string') {
    const error = documentError(attachment);
    if (error) errors.document = error;
  }
  return errors;
}
