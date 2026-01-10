'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Award, Trophy, Shield, Star, Medal } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

// Award icons mapping
const awardIcons = [Award, Trophy, Shield, Star, Medal, Award];

export function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section background="light" ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream-100 to-white" />
      <div className="absolute inset-0 texture-paper" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-gold-500/50 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-32 bg-gradient-to-b from-gold-500/50 to-transparent" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-eyebrow">Recognition</p>
          <h2 className="section-title">Awards & Accolades</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            Our commitment to excellence has been recognized by the legal industry's most prestigious organizations.
          </p>
        </motion.div>

        {/* Awards Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {siteConfig.awardLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col items-center p-6 bg-white border border-navy-100 hover:border-gold-500/30 hover:shadow-card transition-all duration-500">
                  {/* Icon placeholder for award logos */}
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    {(() => {
                      const Icon = awardIcons[index % awardIcons.length];
                      return (
                        <Icon className="w-12 h-12 text-navy-300 group-hover:text-gold-500 transition-colors duration-500" />
                      );
                    })()}
                  </div>
                  <p className="text-navy-700 font-medium text-sm text-center group-hover:text-navy-900 transition-colors">
                    {logo.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recent Awards List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-serif font-bold text-navy-950 text-center mb-10">
            Recent Recognition
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 bg-white border border-navy-100 hover:border-gold-500/30 transition-all duration-300 hover:shadow-card">
                  {/* Year Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-gold-500/10 text-gold-600 text-sm font-semibold">
                      {award.year}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 bg-navy-950 flex items-center justify-center mb-4 group-hover:bg-gold-500 transition-colors duration-300">
                    <Award className="w-6 h-6 text-gold-500 group-hover:text-navy-950 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-serif font-bold text-navy-950 mb-2 pr-16 group-hover:text-gold-600 transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-navy-600 text-sm">
                    {award.organization}
                  </p>

                  {/* Gold bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Credentials Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-navy-200"
        >
          <p className="text-center text-navy-500 text-sm uppercase tracking-wider mb-8">
            Member of Leading Legal Organizations
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {siteConfig.credentials.map((credential) => (
              <div
                key={credential.abbreviation}
                className="flex items-center gap-2 text-navy-600 hover:text-gold-600 transition-colors"
              >
                <div className="w-2 h-2 bg-gold-500 rotate-45" />
                <span className="font-medium">{credential.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
