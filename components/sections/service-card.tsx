import Image from 'next/image';
import type { Service } from '@/lib/config';
import { HashDetails } from './hash-details';
import styles from './service-card.module.css';

export function ServiceCard({
  service,
  id,
  className,
  sizes,
}: {
  service: Service;
  id?: string;
  className?: string;
  sizes: string;
}) {
  return (
    <article id={id} className={className ? `${styles.card} ${className}` : styles.card}>
      <h3>{service.title}</h3>
      <div className={styles.media}>
        <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} unoptimized />
      </div>
      <p>{service.summary}</p>
      <HashDetails id={`details-${service.slug}`} label="Service details" className={styles.details}>
        <p>{service.overview}</p>
        <h4>What we supply</h4>
        <ul>{service.capabilities.map(item => <li key={item}>{item}</li>)}</ul>
        <h4>Procurement benefits</h4>
        <ul>{service.benefits.map(item => <li key={item}>{item}</li>)}</ul>
        <a className={styles.quote} href={`#quote-${service.slug}`}>Request a quote</a>
      </HashDetails>
    </article>
  );
}
