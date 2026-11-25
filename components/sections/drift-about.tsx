import Link from 'next/link';
import { ArrowUpRight, Mail, Plus } from 'lucide-react';
import { DriftMark } from './drift-mark';
import styles from './drift-about.module.css';

export function DriftAbout() {
  return (
    <section className={styles.about} id="about" aria-label="About AO Enterprises">
      <div className={styles.overview}>
        <div className={styles.label}>
          <DriftMark />
          <span>Commercial<br />supply</span>
        </div>
        <p className={styles.statement}>
          We work with businesses and institutions on bulk stationery, commercial printing and long-term supply.
          We bring specifications, quantities and delivery needs into one brief, then coordinate each order through
          sourcing, production and delivery.
        </p>
      </div>

      <Link href="/why-ao" className={styles.more}>
        <span><strong>Why choose AO?</strong> <span>Buying benefits, compliance and how orders work.</span></span>
        <ArrowUpRight aria-hidden="true" size={20} />
      </Link>

      <div className={styles.divider} aria-hidden="true"><span /></div>
      <div className={styles.actions}>
        <Link className={`${styles.button} ${styles.primary}`} href="/contact">
          <span className={styles.icon}><Mail aria-hidden="true" size={16} /></span>
          Contact us
        </Link>
        <Link className={`${styles.button} ${styles.secondary}`} href="/about">
          <span className={styles.icon}><Plus aria-hidden="true" size={16} /></span>
          About AO
        </Link>
      </div>
    </section>
  );
}
