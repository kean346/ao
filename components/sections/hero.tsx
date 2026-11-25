import { DriftNavigation } from '@/components/sections/drift-navigation';
import { DriftQuoteBar } from '@/components/sections/drift-quote-bar';
import { HeroFilm } from '@/components/sections/hero-film';

export function Hero() {
  return (
    <section className="drift-hero" aria-labelledby="home-title">
      <HeroFilm />
      <DriftNavigation />
      <div className="drift-hero-content">
        <h1 id="home-title">
          <span>Bulk supply</span>
          <span>without <em>the hassle</em></span>
        </h1>
        <p className="drift-hero-summary">
          Bulk stationery, commercial printing and contract fulfilment for South African businesses and institutions.
        </p>
        <DriftQuoteBar />
      </div>
    </section>
  );
}
