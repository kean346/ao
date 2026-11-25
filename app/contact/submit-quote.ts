'use server';

import { quoteErrors, textLimits, type Errors } from '@/lib/quote';

type Result = { status: 'sent' | 'failed' } | { status: 'invalid'; errors: Errors };

export async function submitQuote(data: FormData): Promise<Result> {
  const endpoint = process.env.AO_RFQ_ENDPOINT;
  if (!endpoint) return { status: 'failed' };
  const errors = quoteErrors(data);
  if (Object.keys(errors).length) return { status: 'invalid', errors };

  const message = new FormData();
  for (const field of Object.keys(textLimits)) {
    message.set(field, String(data.get(field) ?? '').trim());
  }
  const attachment = data.get('document');
  if (attachment && typeof attachment !== 'string' && attachment.name) {
    message.set('document', attachment);
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: message,
      redirect: 'error',
      signal: AbortSignal.timeout(20000),
      headers: process.env.AO_RFQ_TOKEN ? { Authorization: `Bearer ${process.env.AO_RFQ_TOKEN}` } : {},
    });
    return { status: response.ok ? 'sent' : 'failed' };
  } catch {
    return { status: 'failed' };
  }
}
