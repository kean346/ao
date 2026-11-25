import type { Metadata } from 'next';
import { ActionLink } from '@/components/ui/action-link';
import { DriftNavigation } from '@/components/sections/drift-navigation';
import { procurementAdvantages, procurementStages } from '@/lib/config';
import styles from './why-ao.module.css';

export const metadata: Metadata = {
  title: 'Why choose AO?',
  description: 'Explore how AO Enterprises coordinates bulk procurement, delivery and supplier documentation.',
};

const supplierDocuments = [
  ['CIPC', 'Company registration'],
  ['SARS', 'Tax compliance'],
  ['CSD', 'Supplier registration'],
];

export default function WhyAoPage() {
  return (
    <div className="brass-interior">
      <section className={`brass-banner ${styles.intro} dark-surface`} aria-labelledby="why-ao-title">
        <DriftNavigation />
        <div className="frame-width">
          <h1 id="why-ao-title">Why choose AO?</h1>
          <p>Bulk stationery, commercial printing and recurring supply through one procurement partner.</p>
        </div>
      </section>

      <section className={`${styles.benefits} frame-width`} aria-labelledby="benefits-title">
        <h2 id="benefits-title">Procurement benefits</h2>
        <dl className={styles.benefitGrid}>
          {procurementAdvantages.map(({ title, description }) => (
            <div className={styles.benefit} key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`${styles.benefits} frame-width`} aria-labelledby="process-title">
        <h2 id="process-title">How orders work</h2>
        <ol className={styles.processGrid}>
          {procurementStages.map(({ title, description }) => (
            <li className={styles.benefit} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`${styles.compliance} dark-surface`} aria-labelledby="compliance-title">
        <div className="frame-width">
          <h2 id="compliance-title">Trust &amp; compliance</h2>
          <p>Verified registration details and badges are pending. Include any supplier documentation requirements in your enquiry.</p>
          <dl className={styles.documentGrid}>
            {supplierDocuments.map(([agency, label]) => (
              <div className={styles.document} key={agency}>
                <dt>{agency}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <ActionLink href="/contact#quote-form" variant="solid">Request a quote</ActionLink>
        </div>
      </section>
    </div>
  );
}
