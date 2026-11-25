import type { Metadata } from 'next';
import { QuoteForm } from '@/components/sections/quote-form';
import { services, siteConfig } from '@/lib/config';
import './contact.css';

export const metadata: Metadata = {
  title: 'Request a quote',
  description: 'Prepare a request for quotation for bulk stationery, commercial printing or long-term supply contracts.',
};

type PageProps = { searchParams: Promise<{ service?: string | string[] }> };

export default async function ContactPage({ searchParams }: PageProps) {
  const { service } = await searchParams;
  const selectedService = services.find(item => item.slug === service)?.slug ?? '';
  const email = process.env.AO_CONTACT_EMAIL;
  const phone = process.env.AO_CONTACT_PHONE;

  return (
    <div className="ao-contact">
      <section className="ao-contact-hero dark-surface" aria-labelledby="contact-title">
        <div className="frame-width ao-contact-intro">
          <h1 id="contact-title">Request a quote</h1>
          <p>Share your specifications, estimated quantities and delivery requirements.</p>
        </div>
      </section>

      <div className="frame-width ao-contact-details">
        <aside className="ao-contact-info" aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">Contact details</h2>
          <address>
            <strong>{siteConfig.name}</strong>
            <span>{process.env.AO_CONTACT_ADDRESS || siteConfig.location}</span>
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phone.replace(/[^+0-9]/g, '')}`}>{phone}</a>}
          </address>
        </aside>
        <QuoteForm key={selectedService} selectedService={selectedService} deliveryEnabled={Boolean(process.env.AO_RFQ_ENDPOINT)} />
      </div>
    </div>
  );
}
