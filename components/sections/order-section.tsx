import { directors, procurementAdvantages, procurementStages, services, siteConfig } from '@/lib/config';
import { HashDetails } from './hash-details';
import { QuoteForm } from './quote-form';
import styles from './order-section.module.css';

const supplierDocuments = [
  ['CIPC', 'Company registration'],
  ['SARS', 'Tax compliance'],
  ['CSD', 'Supplier registration'],
];

export function OrderSection() {
  const email = process.env.AO_CONTACT_EMAIL;
  const phone = process.env.AO_CONTACT_PHONE;

  return (
    <section id="contact" className={styles.section} aria-labelledby="order-title">
      <div className="frame-width">
        <div className={styles.intro}>
          <div>
            <h2 id="order-title">Plan your next order.</h2>
            <p>Tell us what you need, where it’s going and when it needs to arrive.</p>
          </div>
          <address className={styles.address}>
            <strong>{siteConfig.name}</strong>
            <span>{process.env.AO_CONTACT_ADDRESS || siteConfig.location}</span>
            {email && <a href={`mailto:${email}`}>{email}</a>}
            {phone && <a href={`tel:${phone.replace(/[^+0-9]/g, '')}`}>{phone}</a>}
          </address>
        </div>

        <HashDetails id="quote-form" label="Request a quote" className={styles.quote}>
          <div className={styles.form}>
            {services.map(service => <span id={`quote-${service.slug}`} key={service.slug} />)}
            <QuoteForm deliveryEnabled={Boolean(process.env.AO_RFQ_ENDPOINT)} />
          </div>
        </HashDetails>

        <div className={styles.more}>
          <HashDetails id="about" label="About AO">
            <div className={styles.panel}>
              <p>{siteConfig.legalName} is a Pretoria-based commercial supplier. We source stationery, coordinate print runs and fulfil recurring supply contracts.</p>
              <dl className={styles.compactList}>
                <div><dt>Vision</dt><dd>Statement forthcoming.</dd></div>
                <div><dt>Mission</dt><dd>Statement forthcoming.</dd></div>
              </dl>
              <h3 id="directors">Board of directors</h3>
              <dl className={styles.compactList}>
                {directors.map(({name, role}) => <div key={name}><dt>{name}</dt><dd>{role}</dd></div>)}
              </dl>
            </div>
          </HashDetails>

          <HashDetails id="procurement" label="Buying process & supplier information">
            <div className={styles.panel}>
              <h3>How orders work</h3>
              <ol className={styles.steps}>
                {procurementStages.map(({title, description}) => <li key={title}><strong>{title}</strong> {description}</li>)}
              </ol>
              <h3>Buying benefits</h3>
              <dl className={styles.compactList}>
                {procurementAdvantages.map(({title, description}) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
              </dl>
              <h3>Supplier documentation</h3>
              <p>Verified registration details and badges are pending. Include any records your organisation requires in your enquiry.</p>
              <dl className={styles.compactList}>
                {supplierDocuments.map(([agency,label]) => <div key={agency}><dt>{agency}</dt><dd>{label}</dd></div>)}
              </dl>
            </div>
          </HashDetails>
        </div>
      </div>
    </section>
  );
}
