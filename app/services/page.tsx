import type { Metadata } from 'next';
import { ServiceCard } from '@/components/sections/service-card';
import { QuoteCta } from '@/components/sections/quote-cta';
import { procurementStages, services } from '@/lib/config';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore bulk stationery supply, commercial printing and long-term supply contracts from AO Enterprises.',
};

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <section className={`${styles.banner} dark-surface`} aria-labelledby="services-title">
        <div className={`${styles.intro} frame-width`}>
          <h1 id="services-title">Our services</h1>
          <p>Bulk stationery, commercial printing and ongoing supply for businesses, schools and institutions.</p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="Service divisions">
        <div className="frame-width">
          <ul className={styles.services}>
            {services.map(service => (
              <ServiceCard key={service.slug} service={service} sizes="(min-width: 768px) 48vw, 94vw" />
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="procurement-title">
        <div className="frame-width">
          <h2 id="procurement-title">Procurement process</h2>
          <ol className={styles.stages}>
            {procurementStages.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <QuoteCta title="Have an order in mind?" />
    </div>
  );
}
