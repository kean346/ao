'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Trophy, Shield } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

export function Credentials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section background="dark" ref={ref}>
      <Container>
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-gold-500" />
            <span className="text-gold-400 text-sm font-medium">
              Recognition & Memberships
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4"
          >
            Trusted by Peers & Clients
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-navy-200 max-w-2xl mx-auto"
          >
            Our commitment to excellence has earned recognition from the legal industry's
            most prestigious organizations and publications.
          </motion.p>
        </div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {siteConfig.credentials.map((credential, index) => (
            <motion.div
              key={credential.abbreviation}
              variants={itemVariants}
              className="bg-navy-800/50 border border-navy-700 rounded-sm p-6 text-center hover:border-gold-500/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gold-500/10 rounded-full flex items-center justify-center">
                <span className="text-gold-500 font-serif font-bold text-lg">
                  {credential.abbreviation}
                </span>
              </div>
              <p className="text-white text-sm font-medium">{credential.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Section */}
        <div className="border-t border-navy-700 pt-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-serif font-bold text-white text-center mb-8"
          >
            Recent Awards & Recognition
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {siteConfig.awards.map((award, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-navy-800/30 rounded-sm"
              >
                <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-navy-950" />
                </div>
                <div>
                  <p className="text-gold-400 text-sm font-medium">{award.year}</p>
                  <p className="text-white font-medium">{award.title}</p>
                  <p className="text-navy-400 text-sm">{award.organization}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 rounded-sm p-8"
        >
          {siteConfig.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-2">
                {stat.value}
              </p>
              <p className="text-navy-200 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
