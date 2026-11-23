import type { Metadata } from 'next';
import Image from 'next/image';
import { QuoteCta } from '@/components/sections/quote-cta';
import { directors, siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the board of AO Enterprises (Pty) Ltd, a commercial supply and procurement business based in Pretoria, Gauteng.',
};

export default function AboutPage() {
  return (
    <>
      <section className="about-hero dark-surface section-space" aria-labelledby="about-title">
        <div className="frame-width">
          <header className="editorial-intro">
            <div>
              <p className="eyebrow">About AO Enterprises</p>
              <h1 id="about-title">The people<br />behind the <em>supply.</em></h1>
            </div>
            <p>{siteConfig.legalName} is a South African commercial supply and procurement business based in Pretoria, Gauteng.</p>
          </header>
          <div className="about-image reveal-photo">
            <Image
              src="/media/paper-detail.webp"
              alt="Close detail of textured graphite and ivory paper stock"
              fill
              priority
              sizes="(min-width: 900px) 62vw, 94vw"
            />
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="company-title">
        <div className="frame-width company-overview">
          <div>
            <p className="eyebrow">Company overview</p>
            <h2 id="company-title">Built around<br /><em>your brief.</em></h2>
          </div>
          <div>
            <p className="company-description">
              We work with businesses, schools, institutions and public-sector organisations on bulk stationery,
              commercial printing and long-term supply requirements. Each enquiry starts with the specifications,
              quantities and delivery needs of the organisation placing the order.
            </p>
            <dl className="purpose-list">
              <div>
                <dt>Vision</dt>
                <dd>Vision statement to be supplied.</dd>
              </div>
              <div>
                <dt>Mission</dt>
                <dd>Mission statement to be supplied.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="directors" className="directors section-space" aria-labelledby="directors-title">
        <div className="frame-width">
          <header className="editorial-intro">
            <h2 id="directors-title">Board of <em>directors.</em></h2>
            <p>Executive portraits forthcoming.</p>
          </header>
          <ul className="directors-grid">
            {directors.map(director => (
              <li key={director.name}>
                <div className="portrait-placeholder" aria-hidden="true" />
                <h3>{director.name}</h3>
                <p>{director.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <QuoteCta title="Work with AO Enterprises." />
    </>
  );
}
