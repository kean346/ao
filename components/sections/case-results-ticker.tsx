'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Award } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export function CaseResultsTicker() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  // Double the results for seamless loop
  const tickerItems = [...siteConfig.caseResults, ...siteConfig.caseResults];

  return (
    <section
      id="case-results"
      ref={ref}
      className="relative py-8 bg-navy-950 overflow-hidden border-y border-gold-500/20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Ticker Container */}
      <div className="relative ticker-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="ticker-content"
        >
          {tickerItems.map((result, index) => (
            <div
              key={`${result.amount}-${index}`}
              className="ticker-item flex items-center gap-4"
            >
              {/* Amount */}
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold-500">
                {result.amount}
              </span>

              {/* Type */}
              <span className="text-navy-300 text-sm md:text-base uppercase tracking-wider whitespace-nowrap">
                {result.type}
              </span>

              {/* Separator */}
              <div className="w-2 h-2 bg-burgundy-600 rotate-45 mx-4" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
}

// Alternative version with stats bar
export function CaseResultsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section
      id="case-results"
      ref={ref}
      className="relative py-12 md:py-16 bg-navy-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />

      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <TrendingUp className="w-6 h-6 text-gold-500" />
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white tracking-wide">
            Recent Case Results
          </h2>
          <TrendingUp className="w-6 h-6 text-gold-500 transform scale-x-[-1]" />
        </motion.div>

        {/* Ticker */}
        <div className="ticker-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="ticker-content"
          >
            {[...siteConfig.caseResults, ...siteConfig.caseResults].map((result, index) => (
              <div
                key={`bar-${result.amount}-${index}`}
                className="ticker-item flex items-center gap-3 md:gap-4"
              >
                <div className="flex items-center gap-2 px-6 py-3 bg-navy-800/50 border border-gold-500/20 backdrop-blur-sm">
                  <Award className="w-4 h-4 text-gold-500 hidden md:block" />
                  <span className="text-2xl md:text-3xl font-serif font-bold text-gold-500">
                    {result.amount}
                  </span>
                  <span className="text-navy-300 text-xs md:text-sm uppercase tracking-wide whitespace-nowrap">
                    {result.type}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-navy-950 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
