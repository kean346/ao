import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ActionLink } from '@/components/ui/action-link';
import { QuoteCta } from '@/components/sections/quote-cta';
import { services } from '@/lib/config';
import styles from '../services.module.css';

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  return service ? { title: service.title, description: service.summary } : { title: 'Service not found' };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find(item => item.slug === slug);
  if (!service) notFound();

  const quoteHref = `/contact?service=${service.slug}#quote-form`;

  return (
    <div className={styles.page}>
      <section className={`${styles.banner} ${styles.detail} dark-surface`} aria-labelledby="service-title">
        <div className="frame-width">
          <Link className={styles.back} href="/services">
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />
            All services
          </Link>
          <div className={styles.detailIntro}>
            <div>
              <h1 id="service-title">{service.title}</h1>
              <p>{service.summary}</p>
              <ActionLink href={quoteHref} variant="solid">
                Request a quote
              </ActionLink>
            </div>
            <div className={styles.photo}>
              <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 768px) 49vw, 94vw" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.requirements} aria-labelledby="service-overview-title">
        <div className="frame-width">
          <header>
            <h2 id="service-overview-title">Order requirements</h2>
            <p>{service.overview}</p>
          </header>
          <div className={styles.orderLists}>
            <div>
              <h3>Capabilities</h3>
              <ul>{service.capabilities.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h3>Procurement benefits</h3>
              <ul>{service.benefits.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <QuoteCta title="Discuss your requirements." service={service.slug} />
    </div>
  );
}
