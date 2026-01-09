'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Building2,
  Scale,
  Home,
  Landmark,
  Lightbulb,
  Users,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { practiceAreas } from '@/lib/config';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Scale,
  Home,
  Landmark,
  Lightbulb,
  Users,
};

interface PracticeAreasProps {
  showAll?: boolean;
  limit?: number;
}

export function PracticeAreas({ showAll = false, limit = 6 }: PracticeAreasProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayedAreas = showAll ? practiceAreas : practiceAreas.slice(0, limit);

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
    <Section background="cream" ref={ref}>
      <Container>
        <SectionHeader
          title="Practice Areas"
          subtitle="Our attorneys bring decades of combined experience across a comprehensive range of legal disciplines, delivering exceptional results for clients."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayedAreas.map((area) => {
            const Icon = iconMap[area.icon] || Scale;
            return (
              <motion.div key={area.slug} variants={itemVariants}>
                <Link href={`/services/${area.slug}`}>
                  <Card
                    variant="elevated"
                    padding="lg"
                    hover
                    className="h-full group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-navy-950" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-serif font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                          {area.name}
                        </h3>
                        <p className="text-navy-600 text-sm leading-relaxed mb-4">
                          {area.shortDescription}
                        </p>
                        <div className="flex items-center text-gold-600 font-medium text-sm group-hover:text-gold-500 transition-colors">
                          Learn More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {!showAll && practiceAreas.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors group"
            >
              View All Practice Areas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
