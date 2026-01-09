'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowRight } from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/container';
import { teamMembers } from '@/lib/config';

interface TeamGridProps {
  showAll?: boolean;
  limit?: number;
  title?: string;
  subtitle?: string;
}

export function TeamGrid({
  showAll = false,
  limit = 4,
  title = 'Our Leadership',
  subtitle = 'Our attorneys combine exceptional legal talent with deep industry knowledge to deliver outstanding results for our clients.',
}: TeamGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayedMembers = showAll ? teamMembers : teamMembers.slice(0, limit);

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
        <SectionHeader title={title} subtitle={subtitle} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {displayedMembers.map((member) => (
            <motion.div key={member.slug} variants={itemVariants}>
              <Link href={`/team/${member.slug}`} className="group block">
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex gap-3 mb-4">
                        <a
                          href={`mailto:${member.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-950 transition-all"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                        <a
                          href={`tel:${member.phone}`}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-950 transition-all"
                        >
                          <Phone className="w-5 h-5" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-950 transition-all"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </div>
                      <div className="flex items-center text-gold-400 font-medium text-sm">
                        View Profile
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                  {/* Gold Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 font-medium text-sm mb-1">
                    {member.title}
                  </p>
                  <p className="text-navy-500 text-sm">{member.role}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && teamMembers.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-navy-700 font-semibold hover:text-gold-600 transition-colors group"
            >
              Meet Our Full Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
