import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ActionLink } from '@/components/ui/action-link';
import { QuoteCta } from '@/components/sections/quote-cta';
import { services } from '@/lib/config';

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
    <>
      <section
        className={`service-detail-hero ${service.number === '02' ? '' : 'dark-surface'}`}
        data-service={service.number}
        aria-labelledby="service-title"
      >
        <div className="frame-width">
          <Link className="back-link" href="/services">
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />
            All services
          </Link>
          <div className="service-hero-grid">
            <div className="service-hero-copy">
              <p className="eyebrow">Service {service.number}</p>
              <h1 id="service-title">{service.title}</h1>
              <p>{service.summary}</p>
              <ActionLink href={quoteHref} variant={service.number === '02' ? 'outline' : 'solid'}>
                Request a quote
              </ActionLink>
            </div>
            <div className="service-hero-image">
              <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 900px) 54vw, 94vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="service-overview-title">
        <div className="frame-width service-overview">
          <div>
            <p className="eyebrow">Overview</p>
            <h2 id="service-overview-title">Define your <em>order.</em></h2>
            <p>{service.overview}</p>
          </div>
          <div className="service-lists">
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
    </>
  );
}
