'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function CaseStudiesPageHero() {
  return (
    <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&h=800&fit=crop"
          alt="Success stories"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/80" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-gold-500" />
            <span className="text-gold-400 text-sm font-medium">Success Stories</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Case
            <span className="text-gold-400"> Studies</span>
          </h1>

          <p className="text-xl text-navy-200 leading-relaxed">
            Discover how we have helped our clients navigate complex legal challenges
            and achieve exceptional outcomes across a wide range of matters.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
