'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Phone, Award, Scale, Shield, ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/lib/config';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Handle video load
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setVideoLoaded(true));
      video.addEventListener('error', () => setVideoLoaded(false));
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#case-results');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* Video Background */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster={siteConfig.hero.imageUrl}
        >
          <source src={siteConfig.hero.videoUrl} type="video/mp4" />
        </video>

        {/* Fallback Image */}
        <Image
          src={siteConfig.hero.imageUrl}
          alt="Morrison & Associates - Premier Law Firm"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          priority
          quality={90}
        />

        {/* Multi-layer Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/98 via-navy-950/90 to-navy-950/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-burgundy-600/10 via-transparent to-transparent" />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-navy-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[100px] z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-burgundy-600/10 rounded-full blur-[80px] z-10 pointer-events-none" />

      {/* Gold accent lines */}
      <div className="absolute top-0 left-[10%] w-px h-[200px] bg-gradient-to-b from-gold-500/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-[100px] left-[10%] w-[100px] h-px bg-gradient-to-r from-gold-500/50 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <Container className="relative z-20 pt-20 pb-32">
        <motion.div
          style={{ opacity }}
          className="max-w-5xl"
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-5 py-2.5 bg-gold-500/10 border border-gold-500/30 backdrop-blur-sm">
              <Award className="w-4 h-4 text-gold-500" />
              <span className="text-gold-400 text-sm font-semibold tracking-wide uppercase">
                Nationally Recognized Excellence
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="display-text text-white mb-8"
          >
            <span className="block">Justice.</span>
            <span className="block text-gold-500">Integrity.</span>
            <span className="block">Results.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-navy-200 mb-10 max-w-2xl leading-relaxed font-light"
          >
            {siteConfig.hero.subheadline}
          </motion.p>

          {/* Gold divider */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-gold-500 to-gold-400 mb-10"
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/contact">
              <button className="group btn-premium flex items-center gap-3">
                <span>Free Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <a href={`tel:${siteConfig.phone}`}>
              <button className="btn-premium-outline flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>{siteConfig.phone}</span>
              </button>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold-500 mb-2">
                  {stat.value}
                </p>
                <p className="text-navy-300 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-navy-300 hover:text-gold-500 transition-colors cursor-pointer"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent z-10 pointer-events-none" />
    </section>
  );
}
