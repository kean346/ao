import type { Metadata } from 'next';
import { ServiceCard } from '@/components/sections/service-card';
import { QuoteCta } from '@/components/sections/quote-cta';
import { services } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore bulk stationery supply, commercial printing and long-term supply contracts from AO Enterprises.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="services-page section-space" aria-labelledby="services-title">
        <div className="frame-width">
          <header className="editorial-intro">
            <div>
              <p className="eyebrow">Services</p>
              <h1 id="services-title">Supply, print,<br /><em>fulfil.</em></h1>
            </div>
            <p>Three ways to source stationery, paper and print. Choose the service that fits a single order or a recurring supply requirement.</p>
          </header>
          <ol className="services-grid">
            {services.map(service => (
              <ServiceCard key={service.slug} service={service} sizes="(min-width: 1024px) 31vw, (min-width: 650px) 45vw, 94vw" />
            ))}
          </ol>
        </div>
      </section>
      <QuoteCta title="Have an order in mind?" />
    </>
  );
}
