'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { testimonials } from '@/lib/config';

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section background="dark" ref={ref} className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-burgundy-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Large decorative quote */}
      <div className="absolute top-20 left-10 text-gold-500/5 pointer-events-none">
        <Quote className="w-64 h-64" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-eyebrow">Client Stories</p>
          <h2 className="section-title-light">What Our Clients Say</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subtitle-light mx-auto">
            The trust of our clients is our greatest achievement. Here is what they have to say about working with Morrison & Associates.
          </p>
        </motion.div>

        {/* Main Testimonial Display - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Large Quote Mark */}
            <div className="absolute -top-8 -left-4 md:-left-12">
              <span className="text-[120px] md:text-[180px] font-serif text-gold-500/20 leading-none select-none">
                "
              </span>
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 pt-12 md:pt-16"
              >
                {/* Quote */}
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-serif text-white leading-relaxed mb-10 italic">
                  {testimonials[currentIndex].quote}
                </blockquote>

                {/* Gold line */}
                <div className="w-20 h-1 bg-gold-500 mb-8" />

                {/* Author Info */}
                <div className="flex items-center gap-6">
                  {/* Photo */}
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gold-500/30">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div>
                    <p className="text-xl font-serif font-bold text-white mb-1">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gold-500 font-medium mb-1">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="text-navy-300 text-sm">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="hidden md:flex items-center gap-1 ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold-500 text-gold-500"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-12 pt-8 border-t border-navy-700">
              {/* Prev/Next Buttons */}
              <div className="flex items-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-14 h-14 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:text-white hover:border-gold-500 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-14 h-14 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:text-white hover:border-gold-500 transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`transition-all duration-300 ${
                      index === currentIndex
                        ? 'w-10 h-2 bg-gold-500'
                        : 'w-2 h-2 bg-navy-600 hover:bg-navy-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Counter */}
              <div className="hidden md:block text-navy-400 font-medium">
                <span className="text-gold-500 text-2xl">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="mx-2">/</span>
                <span>{String(testimonials.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Testimonials Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-navy-800"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onClick={() => setCurrentIndex(index)}
                className={`p-6 cursor-pointer transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-navy-800/50 border border-gold-500/30'
                    : 'bg-navy-900/50 border border-navy-800 hover:border-navy-700'
                }`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote Preview */}
                <p className="text-navy-200 leading-relaxed mb-4 line-clamp-3 text-sm">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-navy-400 text-xs">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
