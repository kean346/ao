'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  Users,
  Target,
  Heart,
  Shield,
  TrendingUp,
  ArrowRight,
  Building,
  Calendar,
} from 'lucide-react';
import { Container, Section, SectionHeader } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/config';

export default function AboutPage() {
  const historyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const isHistoryInView = useInView(historyRef, { once: true, margin: '-100px' });
  const isValuesInView = useInView(valuesRef, { once: true, margin: '-100px' });

  const valueIcons = [Shield, Target, Heart, TrendingUp];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
            alt="Law office interior"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/80" />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <Building className="w-4 h-4 text-gold-500" />
              <span className="text-gold-400 text-sm font-medium">About Our Firm</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              A Legacy of
              <span className="text-gold-400"> Excellence</span>
            </h1>

            <p className="text-xl text-navy-200 leading-relaxed">
              For over three decades, Sterling & Associates has stood as a beacon of
              legal excellence, providing sophisticated counsel to individuals,
              businesses, and institutions across the nation.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Firm History */}
      <Section background="light" ref={historyRef}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isHistoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mb-6" />

              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Sterling & Associates was founded in 1987 by James Sterling with a
                  clear vision: to create a law firm that combines the expertise and
                  resources of the nation's largest firms with the personalized
                  attention and responsiveness of a boutique practice.
                </p>
                <p>
                  What began as a small corporate practice in Manhattan has grown into
                  a nationally recognized firm with offices in New York, Washington
                  D.C., and Boston. Throughout our growth, we have remained true to our
                  founding principles of excellence, integrity, and client service.
                </p>
                <p>
                  Today, our team of over 50 attorneys serves Fortune 500 companies,
                  emerging businesses, high-net-worth individuals, and families with
                  the same commitment to excellence that has defined our firm since day
                  one.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link href="/team">
                  <Button variant="primary" className="group">
                    Meet Our Team
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">Our Practice Areas</Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHistoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop"
                  alt="Sterling & Associates team meeting"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-navy-900 text-white p-6 rounded-sm shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-navy-950" />
                  </div>
                  <div>
                    <p className="text-3xl font-serif font-bold text-gold-400">1987</p>
                    <p className="text-navy-300 text-sm">Year Founded</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Firm Values */}
      <Section background="cream" ref={valuesRef}>
        <Container>
          <SectionHeader
            title="Our Values"
            subtitle="These core principles guide everything we do and define how we serve our clients."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card variant="elevated" padding="lg" className="h-full text-center">
                    <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                      <Icon className="w-7 h-7 text-navy-950" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Statistics Section */}
      <Section background="dark">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold-400 mb-2">
                  {stat.value}
                </p>
                <p className="text-navy-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Achievements Timeline */}
      <Section background="light">
        <Container>
          <SectionHeader
            title="Milestones & Achievements"
            subtitle="Key moments in our firm's history that have shaped who we are today."
          />

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: '1987',
                title: 'Foundation',
                description:
                  'James Sterling founds Sterling & Associates in Manhattan with a focus on corporate law.',
              },
              {
                year: '1995',
                title: 'Expansion',
                description:
                  'Opening of Washington D.C. office to serve government and regulatory clients.',
              },
              {
                year: '2005',
                title: 'Recognition',
                description:
                  'First appearance in Chambers USA rankings as a top corporate law firm.',
              },
              {
                year: '2015',
                title: 'Growth',
                description:
                  'Boston office opens; firm reaches 50 attorneys milestone.',
              },
              {
                year: '2023',
                title: 'Excellence',
                description:
                  'Named "Law Firm of the Year - Corporate" by Chambers USA.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-navy-950 font-bold">
                    {milestone.year.slice(2)}
                  </div>
                  {index < 4 && <div className="w-0.5 h-full bg-navy-200 mt-2" />}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gold-600 font-medium">{milestone.year}</p>
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-navy-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Experience the Sterling Difference
            </h2>
            <p className="text-navy-200 text-lg mb-8">
              Contact us today to learn how our experience and dedication can work
              for you.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
