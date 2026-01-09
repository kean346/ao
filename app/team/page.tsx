import type { Metadata } from 'next';
import { TeamGrid } from '@/components/sections/team-grid';
import { TeamPageHero } from './hero';
import { TeamPageCTA } from './cta';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the experienced attorneys at Sterling & Associates. Our team combines exceptional legal talent with deep industry knowledge to deliver outstanding results.',
};

export default function TeamPage() {
  return (
    <>
      <TeamPageHero />
      <TeamGrid
        showAll
        title="Meet Our Attorneys"
        subtitle="Our team of accomplished attorneys brings diverse expertise and a shared commitment to excellence in client service."
      />
      <TeamPageCTA />
    </>
  );
}
