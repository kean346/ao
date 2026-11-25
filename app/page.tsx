import '@fontsource-variable/inter';
import '@fontsource/instrument-serif/400-italic.css';
import { DriftAbout } from '@/components/sections/drift-about';
import { DriftServices } from '@/components/sections/drift-services';
import { Hero } from '@/components/sections/hero';
import './homepage.css';

export default function HomePage() {
  return (
    <div className="drift-landing">
      <Hero />
      <DriftServices />
      <DriftAbout />
    </div>
  );
}
