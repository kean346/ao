import type { Metadata } from 'next';
import { QuoteForm } from '@/components/sections/quote-form';
import { services, siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Request a quote',
  description: 'Prepare a request for quotation for bulk stationery, commercial printing or long-term supply contracts.',
};

type PageProps = { searchParams: Promise<{ service?: string | string[] }> };

export default async function ContactPage({ searchParams }: PageProps) {
  const { service } = await searchParams;
  const selectedService = services.find(item => item.slug === service)?.slug ?? '';

  return (
    <section className="contact-page section-space" aria-labelledby="contact-title">
      <div className="frame-width">
        <header className="editorial-intro">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 id="contact-title">Request<br />a <em>quote.</em></h1>
          </div>
          <div>
            <p className="contact-intro">Tell us what you need, how much, and where it needs to go.</p>
            <p className="contact-location">{siteConfig.location}</p>
          </div>
        </header>
        <QuoteForm key={selectedService} selectedService={selectedService} />
      </div>
    </section>
  );
}
