import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Briefcase,
  Building,
  Target,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { caseStudies, getCaseStudy, getTeamMember } from '@/lib/config';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const teamMembers = study.teamMembers
    .map((slug) => getTeamMember(slug))
    .filter(Boolean);

  // Get other case studies for related section
  const otherStudies = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 to-navy-900/85" />
        </div>

        <Container className="relative z-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-gold-500 text-navy-950 text-sm font-bold rounded-sm">
                {study.value}
              </span>
              <span className="px-3 py-1 bg-navy-700 text-navy-200 text-sm rounded-sm">
                {study.practiceArea}
              </span>
              <span className="px-3 py-1 bg-navy-700 text-navy-200 text-sm rounded-sm">
                {study.year}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {study.title}
            </h1>

            <p className="text-xl text-navy-200 leading-relaxed">{study.summary}</p>
          </div>
        </Container>
      </section>

      {/* Case Details */}
      <Section background="light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* The Challenge */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-gold-500" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900">
                    The Challenge
                  </h2>
                </div>
                <p className="text-navy-700 leading-relaxed text-lg">
                  {study.challenge}
                </p>
              </div>

              {/* Our Solution */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-navy-900 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-gold-500" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900">
                    Our Solution
                  </h2>
                </div>
                <p className="text-navy-700 leading-relaxed text-lg">
                  {study.solution}
                </p>
              </div>

              {/* The Result */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-navy-950" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900">
                    The Result
                  </h2>
                </div>
                <p className="text-navy-700 leading-relaxed text-lg">
                  {study.result}
                </p>
              </div>

              {/* Team Members */}
              {teamMembers.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Case Team
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {teamMembers.map(
                      (member) =>
                        member && (
                          <Link key={member.slug} href={`/team/${member.slug}`}>
                            <Card
                              variant="elevated"
                              padding="md"
                              hover
                              className="flex gap-4"
                            >
                              <div className="relative w-20 h-20 rounded-sm overflow-hidden flex-shrink-0">
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-serif font-bold text-navy-900">
                                  {member.name}
                                </h3>
                                <p className="text-gold-600 text-sm">{member.title}</p>
                                <p className="text-navy-500 text-sm">{member.role}</p>
                              </div>
                            </Card>
                          </Link>
                        )
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Case Details Card */}
              <Card variant="elevated" padding="lg" className="mb-8 sticky top-24">
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-6">
                  Case Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-navy-500">Client</p>
                      <p className="font-medium text-navy-800">{study.client}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-navy-500">Industry</p>
                      <p className="font-medium text-navy-800">{study.industry}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-navy-500">Practice Area</p>
                      <p className="font-medium text-navy-800">{study.practiceArea}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-navy-500">Year</p>
                      <p className="font-medium text-navy-800">{study.year}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-navy-500">Value/Outcome</p>
                      <p className="font-bold text-gold-600 text-lg">{study.value}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-100">
                  <Link href="/contact">
                    <Button variant="primary" className="w-full group">
                      Discuss Your Case
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Case Studies */}
      <Section background="cream">
        <Container>
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
            Related Case Studies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {otherStudies.map((otherStudy) => (
              <Link key={otherStudy.slug} href={`/case-studies/${otherStudy.slug}`}>
                <Card variant="elevated" padding="none" hover className="h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={otherStudy.image}
                      alt={otherStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                    <div className="absolute top-4 right-4 bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-sm font-bold">
                      {otherStudy.value}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-gold-600 text-sm font-medium">
                      {otherStudy.practiceArea}
                    </span>
                    <h3 className="font-serif font-bold text-navy-900 mt-2">
                      {otherStudy.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Achieve Similar Results
            </h2>
            <p className="text-navy-200 text-lg mb-8">
              Our attorneys are ready to bring the same level of dedication and
              expertise to your legal matter.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Start Your Case
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
