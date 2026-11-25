import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { ActionLink } from '@/components/ui/action-link';
import { procurementAdvantages, services } from '@/lib/config';
import './homepage.css';

const credentials = [
  ['CIPC', 'Company registration'],
  ['SARS', 'Tax compliance'],
  ['CSD', 'Supplier registration'],
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="home-value dark-surface" aria-labelledby="home-value-title">
        <div className="frame-width">
          <h2 id="home-value-title">Why choose AO?</h2>
          <dl className="home-pillars">
            {procurementAdvantages.map(({ title, description }) => (
              <div key={title}><dt>{title}</dt><dd>{description}</dd></div>
            ))}
          </dl>
        </div>
      </section>
      <section id="services" className="home-divisions" aria-labelledby="home-services-title">
        <div className="frame-width">
          <div className="home-section-heading">
            <h2 id="home-services-title">Our services</h2>
            <ActionLink href="/services">View all services</ActionLink>
          </div>
          <ul className="division-list">
            {services.map(service => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`}>
                  <div className="division-photo">
                    <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 768px) 38vw, 94vw" />
                  </div>
                  <div className="division-copy">
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.5} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="home-compliance dark-surface" aria-labelledby="home-compliance-title">
        <div className="frame-width">
          <h2 id="home-compliance-title">Trust &amp; compliance</h2>
          <p>Registration details and supporting documents are awaiting confirmation.</p>
          <dl>
            {credentials.map(([agency, label]) => <div key={agency}><dt>{agency}</dt><dd>{label}</dd></div>)}
          </dl>
        </div>
      </section>
    </>
  );
}
