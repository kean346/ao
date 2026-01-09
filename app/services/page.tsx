import type { Metadata } from 'next';
import { PracticeAreas } from '@/components/sections/practice-areas';
import { ServicesPageHero } from './hero';
import { ServicesPageCTA } from './cta';

export const metadata: Metadata = {
  title: 'Practice Areas',
  description:
    'Sterling & Associates provides comprehensive legal services across corporate law, litigation, real estate, estate planning, intellectual property, and employment law.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      <PracticeAreas showAll />
      <ServicesPageCTA />
    </>
  );
}
