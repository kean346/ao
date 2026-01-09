import type { Metadata } from 'next';
import { CaseStudiesPreview } from '@/components/sections/case-studies-preview';
import { CaseStudiesPageHero } from './hero';
import { CaseStudiesPageCTA } from './cta';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore how Sterling & Associates has helped clients achieve their objectives through strategic legal counsel and skilled representation.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesPageHero />
      <CaseStudiesPreview showAll />
      <CaseStudiesPageCTA />
    </>
  );
}
