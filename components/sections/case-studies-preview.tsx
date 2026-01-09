'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, TrendingUp, Calendar, Briefcase } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/config';

interface CaseStudiesPreviewProps {
  showAll?: boolean;
  limit?: number;
}

export function CaseStudiesPreview({ showAll = false, limit = 3 }: CaseStudiesPreviewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, limit);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Section background="light" ref={ref}>
      <Container>
        <SectionHeader
          title="Case Studies"
          subtitle="Explore how we have helped our clients achieve their objectives through strategic legal counsel and skilled representation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedStudies.map((study) => (
            <motion.div key={study.slug} variants={itemVariants}>
              <Link href={`/case-studies/${study.slug}`}>
                <Card
                  variant="elevated"
                  padding="none"
                  hover
                  className="h-full overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />

                    {/* Value Badge */}
                    <div className="absolute top-4 right-4 bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-sm font-bold">
                      {study.value}
                    </div>

                    {/* Practice Area Tag */}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-gold-400 text-sm font-medium">
                        {study.practiceArea}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                      {study.title}
                    </h3>

                    <p className="text-navy-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {study.summary}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-navy-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {study.industry}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {study.year}
                      </span>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center text-gold-600 font-medium text-sm group-hover:text-gold-500 transition-colors">
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && caseStudies.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/case-studies">
              <Button variant="outline" size="lg" className="group">
                View All Case Studies
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
