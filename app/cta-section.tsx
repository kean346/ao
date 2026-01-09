'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section background="gradient" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="text-lg md:text-xl text-navy-200 mb-8 leading-relaxed">
            Our attorneys are ready to provide the strategic counsel and skilled
            representation you need. Schedule a confidential consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group w-full sm:w-auto">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Phone className="mr-2 w-5 h-5" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-navy-300 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              Confidential Consultations
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              No Obligation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold-500 rounded-full" />
              Experienced Attorneys
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
