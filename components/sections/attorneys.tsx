'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Award, Linkedin, Mail, Phone } from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { teamMembers } from '@/lib/config';

interface AttorneysProps {
  limit?: number;
  showAll?: boolean;
}

export function Attorneys({ limit, showAll = false }: AttorneysProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const displayedAttorneys = showAll ? teamMembers : (limit ? teamMembers.slice(0, limit) : teamMembers);

  return (
    <Section background="cream" ref={ref} className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 texture-paper" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2" />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <p className="section-eyebrow">Legal Excellence</p>
          <h2 className="section-title">Our Attorneys</h2>
          <div className="gold-divider mx-auto mb-6" />
          <p className="section-subtitle mx-auto">
            Award-winning attorneys with decades of experience fighting for our clients.
            Meet the team that will champion your case.
          </p>
        </motion.div>

        {/* Attorneys Grid - Magazine Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {displayedAttorneys.map((attorney, index) => (
            <motion.div
              key={attorney.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative bg-white shadow-card hover:shadow-card-hover transition-all duration-500">
                {/* Photo Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={attorney.image}
                    alt={attorney.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {/* Credentials */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {attorney.credentials?.slice(0, 3).map((credential, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-gold-500/90 text-navy-950 text-xs font-semibold"
                        >
                          <Award className="w-3 h-3" />
                          {credential}
                        </span>
                      ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="flex items-center gap-3">
                      <Link
                        href={`/team/${attorney.slug}`}
                        className="flex-1 btn-premium text-center text-sm py-3"
                      >
                        View Profile
                      </Link>
                      <a
                        href={`mailto:${attorney.email}`}
                        className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-navy-950 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Gold accent corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500 transform rotate-45 translate-x-12 -translate-y-12" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="p-6">
                  {/* Name & Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-950 mb-1 group-hover:text-gold-600 transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-gold-600 font-medium mb-2">{attorney.title}</p>
                  <p className="text-navy-500 text-sm mb-4">{attorney.role}</p>

                  {/* Practice Areas */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {attorney.practiceAreas.slice(0, 2).map((area, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-navy-600 bg-navy-100 px-3 py-1"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  {/* Gold line */}
                  <div className="w-12 h-0.5 bg-gold-500 mb-4 group-hover:w-full transition-all duration-500" />

                  {/* View Profile Link */}
                  <Link
                    href={`/team/${attorney.slug}`}
                    className="inline-flex items-center gap-2 text-navy-700 font-medium hover:text-gold-600 transition-colors group/link"
                  >
                    <span>View Full Profile</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        {!showAll && limit && teamMembers.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <Link href="/team">
              <button className="btn-elegant group inline-flex items-center gap-3">
                <span>Meet Our Full Team</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        )}
      </Container>
    </Section>
  );
}
