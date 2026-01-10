'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Scale, Users, Shield } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { siteConfig, aboutContent } from '@/lib/config';

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <Section background="cream" ref={ref} className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-paper" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              style={{ y: parallaxY }}
              className="relative aspect-[4/5] shadow-elegant"
            >
              <Image
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=1000&fit=crop"
                alt="Morrison & Associates Law Office"
                fill
                className="object-cover"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-10 -right-10 lg:-right-20 bg-navy-950 text-white p-8 shadow-premium max-w-xs"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold-500 mb-1">40+</p>
                  <p className="text-navy-300 text-xs uppercase tracking-wider">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold-500 mb-1">$500M+</p>
                  <p className="text-navy-300 text-xs uppercase tracking-wider">Recovered</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-navy-700">
                <p className="text-center text-sm text-navy-200">
                  Established {siteConfig.founded}
                </p>
              </div>
            </motion.div>

            {/* Gold accent frame */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-l-2 border-t-2 border-gold-500" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-gold-500" />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-title mb-6">{aboutContent.headline}</h2>
            <div className="gold-divider mb-8" />

            <p className="text-xl font-serif text-navy-700 mb-6 leading-relaxed">
              {aboutContent.subheadline}
            </p>

            <div className="prose prose-lg text-navy-600 mb-8">
              <p className="leading-relaxed">
                Founded by William Morrison in 1985, Morrison & Associates began with a simple mission: to provide exceptional legal representation to individuals and families who need it most.
              </p>
              <p className="leading-relaxed">
                What started as a two-person practice has grown into one of the region's most respected law firms, with offices in New York, Los Angeles, and Chicago. Our growth has been driven by our unwavering commitment to our clients.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {siteConfig.values.slice(0, 4).map((value, index) => {
                const icons = [Scale, Shield, Award, Users];
                const Icon = icons[index];
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white border border-navy-100"
                  >
                    <div className="w-10 h-10 bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-navy-950 mb-1">{value.title}</h4>
                      <p className="text-navy-600 text-sm leading-relaxed line-clamp-2">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/about">
              <button className="btn-elegant group inline-flex items-center gap-3">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
