import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroFilm } from '@/components/sections/hero-film';

export function Hero() {
  return (
    <section className="masthead dark-surface" aria-labelledby="home-title">
      <HeroFilm />
      <div className="frame-width masthead-inner">
        <div className="masthead-copy">
          <p className="eyebrow">Commercial supply &amp; procurement</p>
          <h1 id="home-title">Reliable<br />bulk supply.</h1>
          <p className="masthead-summary">Bulk stationery, commercial printing and contract fulfilment for South African businesses and institutions.</p>
          <Link className="masthead-quote" href="/contact#quote-form">
            Request a quote <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <a className="masthead-explore" href="#services">
          Explore our services <ArrowDown size={17} strokeWidth={1.4} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
