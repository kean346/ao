import { Hero } from '@/components/sections/hero';
import { CaseResultsTicker } from '@/components/sections/case-results-ticker';
import { PracticeAreas } from '@/components/sections/practice-areas';
import { Attorneys } from '@/components/sections/attorneys';
import { About } from '@/components/sections/about';
import { Testimonials } from '@/components/sections/testimonials';
import { Awards } from '@/components/sections/awards';
import { Results } from '@/components/sections/results';
import { CTASection } from './cta-section';

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen Hero with Video Background */}
      <Hero />

      {/* 2. Case Results Ticker - Auto-scrolling */}
      <CaseResultsTicker />

      {/* 3. Practice Areas - Elegant Grid */}
      <PracticeAreas limit={6} />

      {/* 4. Attorneys - Magazine Style Profiles */}
      <Attorneys limit={4} />

      {/* 5. About the Firm */}
      <About />

      {/* 6. Client Testimonials - Editorial Style */}
      <Testimonials />

      {/* 7. Awards & Recognition */}
      <Awards />

      {/* 8. Notable Case Results */}
      <Results limit={3} />

      {/* 9. CTA - Schedule Consultation Form */}
      <CTASection />
    </>
  );
}
