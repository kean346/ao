'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function CaseStudiesPageCTA() {
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
          <div className="w-14 h-14 mx-auto mb-6 bg-gold-500/20 rounded-full flex items-center justify-center">
            <MessageSquare className="w-7 h-7 text-gold-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Let Us Help You Achieve Similar Results
          </h2>

          <p className="text-navy-200 text-lg mb-8">
            Our attorneys are ready to bring the same level of dedication and
            expertise to your legal matter. Contact us today to discuss your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start Your Case
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/team">
              <Button variant="secondary" size="lg">
                Meet Our Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
