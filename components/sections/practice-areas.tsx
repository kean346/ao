'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Shield, Heart, Scale, Users, Briefcase, Building,
  ArrowRight, ChevronDown, ChevronUp, X
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { practiceAreas } from '@/lib/config';

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Heart,
  Scale,
  Users,
  Briefcase,
  Building,
};

interface PracticeAreasProps {
  limit?: number;
  showAll?: boolean;
}

export function PracticeAreas({ limit, showAll = false }: PracticeAreasProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const displayedAreas = showAll ? practiceAreas : (limit ? practiceAreas.slice(0, limit) : practiceAreas);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <Section background="light" ref={ref} className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 texture-paper" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-burgundy-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-eyebrow">Our Expertise</p>
          <h2 className="section-title">Practice Areas</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            Comprehensive legal representation across all major practice areas.
            Our attorneys bring decades of experience and a proven track record of success.
          </p>
        </motion.div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedAreas.map((area, index) => {
            const Icon = iconMap[area.icon] || Scale;
            const isExpanded = expandedId === area.id;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative bg-white border border-navy-100 transition-all duration-500 cursor-pointer
                    ${isExpanded ? 'shadow-elegant' : 'shadow-card hover:shadow-card-hover hover:-translate-y-1'}`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(area.id)}
                    className="p-6 md:p-8"
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 bg-navy-950 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-gold-500 group-hover:text-navy-950 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-950 mb-3 group-hover:text-gold-600 transition-colors">
                      {area.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-navy-600 leading-relaxed mb-4">
                      {area.shortDescription}
                    </p>

                    {/* Expand Toggle */}
                    <button className="flex items-center gap-2 text-gold-600 font-medium text-sm uppercase tracking-wide group/btn">
                      <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-navy-100"
                      >
                        <div className="p-6 md:p-8 bg-cream-50">
                          {/* Full Description */}
                          <p className="text-navy-700 mb-6 leading-relaxed">
                            {area.description}
                          </p>

                          {/* Services List */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-navy-950 uppercase tracking-wide mb-4">
                              What We Handle
                            </h4>
                            <ul className="grid grid-cols-2 gap-2">
                              {area.features.map((feature) => (
                                <li
                                  key={feature}
                                  className="flex items-center gap-2 text-sm text-navy-600"
                                >
                                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA */}
                          <Link href={`/services/${area.slug}`}>
                            <button className="flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-700 transition-colors group/link">
                              <span>View Full Details</span>
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </button>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Gold bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        {!showAll && limit && practiceAreas.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/services">
              <button className="btn-elegant group inline-flex items-center gap-3">
                <span>View All Practice Areas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
