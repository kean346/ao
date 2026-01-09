import { Hero } from '@/components/sections/hero';
import { PracticeAreas } from '@/components/sections/practice-areas';
import { TeamGrid } from '@/components/sections/team-grid';
import { Credentials } from '@/components/sections/credentials';
import { Testimonials } from '@/components/sections/testimonials';
import { CaseStudiesPreview } from '@/components/sections/case-studies-preview';
import { CTASection } from './cta-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <PracticeAreas limit={6} />
      <TeamGrid limit={4} />
      <Credentials />
      <CaseStudiesPreview limit={3} />
      <Testimonials />
      <CTASection />
    </>
  );
}
