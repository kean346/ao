import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/lib/config';
import { DriftMark } from './drift-mark';
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
      <DriftMark className={styles.mark} />
      <h3><Link href={`/services/${service.slug}`}>{service.title}</Link></h3>
      <div className={styles.media}>
        <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} unoptimized />
      </div>
      <p>{service.summary}</p>
    </article>
  );
}
