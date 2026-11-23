import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { HeroFilm } from '@/components/sections/hero-film';
import { ActionLink } from '@/components/ui/action-link';
import { siteConfig } from '@/lib/config';

export function Hero() {
  return (
    <section className="home-hero dark-surface" aria-labelledby="home-title">
      <HeroFilm />
      <div className="frame-width hero-inner">
        <div className="hero-composition">
          <div className="hero-copy">
            <div className="hero-heading">
              <p className="eyebrow hero-enter">{siteConfig.tagline}</p>
              <h1 id="home-title" className="hero-enter">Supply with<br /> purpose.</h1>
            </div>
            <div className="hero-words hero-enter">
              <p className="hero-statement">Partnerships <em>built to last.</em></p>
              <p className="hero-description">{siteConfig.description}</p>
              <div className="hero-actions">
                <ActionLink href="/contact#quote-form" variant="solid">Request a quote</ActionLink>
                <ActionLink href="#services">Explore our services</ActionLink>
              </div>
            </div>
          </div>
          <div className="hero-detail hero-enter">
            <Image
              src="/media/paper-detail.webp"
              alt="Layers of graphite bookcloth and ivory paper stock"
              fill
              sizes="(min-width: 768px) 22vw, 29vw"
            />
          </div>
        </div>

        <div className="hero-foot hero-enter">
          <a href="#services" className="scroll-link">
            <ArrowDown aria-hidden="true" size={16} strokeWidth={1.55} />
            <span>Scroll to explore</span>
          </a>
          <span>Pretoria, South Africa</span>
        </div>
      </div>
    </section>
  );
}
