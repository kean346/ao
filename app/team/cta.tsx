'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function TeamPageCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section background="cream" ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-14 h-14 mx-auto mb-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
            <Briefcase className="w-7 h-7 text-navy-950" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">
            Join Our Team
          </h2>

          <p className="text-navy-600 text-lg mb-8">
            Sterling & Associates is always looking for exceptional legal talent. If
            you're committed to excellence and client service, we'd like to hear from
            you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
