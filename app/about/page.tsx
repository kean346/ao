import type { Metadata } from 'next';
import Image from 'next/image';
import { ActionLink } from '@/components/ui/action-link';
import { directors, siteConfig } from '@/lib/config';
import './about.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'About AO Enterprises (Pty) Ltd, a commercial supply and procurement business based in Pretoria, Gauteng.',
};

export default function AboutPage() {
  return (
    <div className="ao-about">
      <section className="ao-about-hero dark-surface" aria-labelledby="about-title">
        <div className="frame-width ao-about-intro">
          <p className="eyebrow">Pretoria, Gauteng</p>
          <h1 id="about-title">About AO Enterprises</h1>
          <p>{siteConfig.legalName} provides commercial supply and procurement services to South African organisations.</p>
        </div>
      </section>

      <div className="frame-width ao-about-details">
        <section className="ao-about-overview" aria-labelledby="about-overview-title">
          <div>
            <h2 id="about-overview-title">What we do</h2>
            <p>
              We source bulk stationery, coordinate commercial printing and fulfil supply contracts.
              For once-off orders and long-term partnerships, we work from your specifications, quantities and delivery requirements.
            </p>
          </div>
          <div className="ao-about-media">
            <Image
              src="/media/paper-detail.webp"
              alt="Layers of ivory paper and graphite bookcloth"
              fill
              sizes="(min-width: 1200px) 540px, (min-width: 760px) 46vw, 92vw"
            />
          </div>
        </section>

        <section className="ao-about-purpose" aria-label="Vision and mission">
          <div>
            <h2>Vision</h2>
            <p>Statement forthcoming.</p>
          </div>
          <div>
            <h2>Mission</h2>
            <p>Statement forthcoming.</p>
          </div>
        </section>

        <section id="directors" className="ao-about-board" aria-labelledby="directors-title">
          <h2 id="directors-title">Board of directors</h2>
          <ul className="ao-about-directors">
            {directors.map(director => (
              <li key={director.name}>
                <h3>{director.name}</h3>
                <p>{director.role}</p>
              </li>
            ))}
          </ul>
        </section>

        <ActionLink href="/contact#quote-form" variant="outline">Request a Quote</ActionLink>
      </div>
    </div>
  );
}
