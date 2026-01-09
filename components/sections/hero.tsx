'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Award, Scale, Shield } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-navy-950"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
          alt="Professional law office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/98 via-navy-900/95 to-navy-950/85" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-navy-950 to-transparent z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-400/10 rounded-full blur-2xl" />

      {/* Content */}
      <Container className="relative z-20">
        <motion.div
          style={{ opacity }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6"
            >
              <Award className="w-4 h-4 text-gold-500" />
              <span className="text-gold-400 text-sm font-medium">
                Nationally Recognized Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-6"
            >
              Exceptional Legal
              <span className="block text-gold-400">Representation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-navy-200 mb-8 leading-relaxed"
            >
              For over 35 years, Sterling & Associates has provided sophisticated
              legal counsel to individuals, businesses, and institutions. Our
              commitment to excellence drives everything we do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="secondary" size="lg">
                  Our Practice Areas
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">500+</p>
                  <p className="text-navy-400 text-sm">Cases Won</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">98%</p>
                  <p className="text-navy-400 text-sm">Client Satisfaction</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-gold-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">35+</p>
                  <p className="text-navy-400 text-sm">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Feature Cards (visible on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main Featured Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  Why Choose Sterling & Associates?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy-950 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Proven Track Record</p>
                      <p className="text-navy-300 text-sm">Over $50 billion in transactions closed</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy-950 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Elite Team</p>
                      <p className="text-navy-300 text-sm">50+ attorneys from top law schools</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy-950 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Client-Focused</p>
                      <p className="text-navy-300 text-sm">Personalized attention for every matter</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-navy-950 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">National Recognition</p>
                      <p className="text-navy-300 text-sm">Chambers USA, Best Lawyers, Super Lawyers</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold-500 text-navy-950 px-4 py-2 rounded-sm font-bold text-sm shadow-lg">
                AV Rated
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-10" />
    </section>
  );
}
