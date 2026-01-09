'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Container } from '@/components/ui/container';

export function TeamPageHero() {
  return (
    <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=800&fit=crop"
          alt="Legal team collaboration"
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
            <Users className="w-4 h-4 text-gold-500" />
            <span className="text-gold-400 text-sm font-medium">Our Team</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Exceptional
            <span className="text-gold-400"> Attorneys</span>
          </h1>

          <p className="text-xl text-navy-200 leading-relaxed">
            Our attorneys are graduates of the nation's leading law schools and bring
            decades of collective experience from top law firms, government agencies,
            and Fortune 500 companies.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
