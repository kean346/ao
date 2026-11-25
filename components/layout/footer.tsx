import Link from 'next/link';
import { Brand } from '@/components/layout/brand';
import { siteConfig } from '@/lib/config';

export function Footer() {
  return (
    <footer className="site-footer dark-surface">
      <div className="frame-width">
        <div className="footer-main">
          <div>
            <Brand />
            <p>{siteConfig.tagline}</p>
          </div>
          <nav aria-label="Footer">
            {siteConfig.navigation.map(({ href, label }) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/#quote-form">Request a quote</Link>
          </nav>
          <p className="footer-location">{siteConfig.location}</p>
        </div>
        <p className="footer-legal">{siteConfig.legalName}</p>
      </div>
    </footer>
  );
}
