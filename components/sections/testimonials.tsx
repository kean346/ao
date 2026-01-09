'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/container';
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
    <Section background="cream" ref={ref}>
      <Container>
        <SectionHeader
          title="Client Testimonials"
          subtitle="The trust of our clients is our greatest achievement. Here's what they have to say about working with Sterling & Associates."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-white rounded-sm shadow-xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-navy-950" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
              ))}
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-xl md:text-2xl font-serif text-navy-800 leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-navy-900">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-navy-600 text-sm">
                      {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4 md:-mx-16">
              <button
                onClick={prevTestimonial}
                className="pointer-events-auto w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-navy-700 hover:text-gold-600 hover:shadow-xl transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="pointer-events-auto w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-navy-700 hover:text-gold-600 hover:shadow-xl transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-gold-500 w-8'
                    : 'bg-navy-300 hover:bg-navy-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-navy-900 rounded-sm p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="text-navy-200 leading-relaxed mb-6 line-clamp-4">
                "{testimonial.quote}"
              </blockquote>
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
                  <p className="text-navy-400 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
