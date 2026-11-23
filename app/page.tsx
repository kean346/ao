import { Hero } from '@/components/sections/hero';
import { ServiceDivisions } from '@/components/sections/service-divisions';
import { ProcurementProcess } from '@/components/sections/procurement-process';
import { QuoteCta } from '@/components/sections/quote-cta';
import { procurementAdvantages } from '@/lib/config';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceDivisions />
      <section className="advantages dark-surface section-space" aria-labelledby="advantages-title">
        <div className="frame-width advantages-inner">
          <div>
            <p className="eyebrow">Why AO Enterprises</p>
            <h2 id="advantages-title">Built for<br /><em>procurement.</em></h2>
          </div>
          <dl className="advantages-list">
            {procurementAdvantages.map(advantage => (
              <div key={advantage.title}>
                <dt>{advantage.title}</dt>
                <dd>{advantage.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <ProcurementProcess />
      <QuoteCta />
    </>
  );
}
