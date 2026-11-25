import type { Metadata } from 'next';
import { ActionLink } from '@/components/ui/action-link';
import { procurementAdvantages } from '@/lib/config';
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
    <>
      <section className={`${styles.intro} dark-surface`} aria-labelledby="why-ao-title">
        <div className="frame-width">
          <h1 id="why-ao-title">Why choose AO?</h1>
          <p>Bulk stationery, commercial printing and recurring supply through one procurement partner.</p>
        </div>
      </section>

      <section className={`${styles.benefits} frame-width`} aria-label="Procurement benefits">
        <dl className={styles.benefitGrid}>
          {procurementAdvantages.map(({ title, description }) => (
            <div className={styles.benefit} key={title}>
              <dt>{title}</dt>
              <dd>{description}</dd>
            </div>
          ))}
        </dl>
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
    </>
  );
}
