import { OrderSection } from '@/components/sections/order-section';
import { DriftServices } from '@/components/sections/drift-services';
import { Hero } from '@/components/sections/hero';
import './homepage.css';

export default function HomePage() {
  return (
    <div className="drift-landing">
      <Hero />
      <DriftServices />
      <OrderSection />
    </div>
  );
}
