import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '@/lib/config';

export function ServiceCard({
  service,
  active,
  sizes,
}: {
  service: Service;
  active?: boolean;
  sizes: string;
}) {
  return (
    <li className="service-card" data-active={active}>
      <Link href={`/services/${service.slug}`}>
        <div className="service-card-image">
          <Image src={service.image} alt={service.imageAlt} fill sizes={sizes} />
        </div>
        <div className="service-card-copy">
          <span className="service-number">{service.number}</span>
          <div>
            <h3>{service.title}</h3>
            <p>{service.summary}</p>
          </div>
          <ArrowUpRight className="service-arrow" aria-hidden="true" size={25} strokeWidth={1.3} />
        </div>
      </Link>
    </li>
  );
}
