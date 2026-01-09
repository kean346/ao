'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

export function ServicesPageCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section background="gradient" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>

          <p className="text-navy-200 text-lg mb-8">
            Our attorneys are ready to provide the strategic counsel and skilled
            representation you need. Contact us today to discuss your legal matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="secondary" size="lg">
                <Phone className="mr-2 w-5 h-5" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
