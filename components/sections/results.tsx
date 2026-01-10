'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Award, Scale } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { caseStudies } from '@/lib/config';

interface ResultsProps {
  limit?: number;
}

export function Results({ limit = 3 }: ResultsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayedCases = caseStudies.slice(0, limit);

  return (
    <Section background="light" ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 texture-paper" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[150px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-eyebrow">Proven Track Record</p>
          <h2 className="section-title">Notable Case Results</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            Our results speak for themselves. Here are some of our recent victories that demonstrate our commitment to achieving justice for our clients.
          </p>
        </motion.div>

        {/* Results Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {displayedCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <Link href={`/case-studies/${caseStudy.slug}`}>
                <div className="relative bg-white border border-navy-100 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                    {/* Value Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className="px-4 py-2 bg-gold-500 text-navy-950 font-bold text-lg">
                        {caseStudy.value}
                      </div>
                    </div>

                    {/* Year */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-navy-950/80 backdrop-blur-sm text-white text-sm">
                        {caseStudy.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Practice Area Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <Scale className="w-4 h-4 text-gold-600" />
                      <span className="text-gold-600 text-sm font-medium">
                        {caseStudy.practiceArea}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                      {caseStudy.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {caseStudy.summary}
                    </p>

                    {/* Result highlight */}
                    <div className="p-3 bg-cream-100 mb-4">
                      <p className="text-navy-700 text-sm">
                        <span className="font-semibold text-navy-950">Result:</span> {caseStudy.result.slice(0, 100)}...
                      </p>
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-navy-700 font-medium group-hover:text-gold-600 transition-colors">
                      <span>Read Full Case</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Gold bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 bg-navy-950"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6 text-gold-500" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-500">$500M+</span>
              </div>
              <p className="text-navy-300 text-sm uppercase tracking-wider">Total Recovered</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-6 h-6 text-gold-500" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-500">98%</span>
              </div>
              <p className="text-navy-300 text-sm uppercase tracking-wider">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Scale className="w-6 h-6 text-gold-500" />
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-500">10,000+</span>
              </div>
              <p className="text-navy-300 text-sm uppercase tracking-wider">Cases Won</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold-500">40+</span>
              </div>
              <p className="text-navy-300 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies">
            <button className="btn-elegant group inline-flex items-center gap-3">
              <span>View All Case Results</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
