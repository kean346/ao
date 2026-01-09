import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Scale,
  Home,
  Landmark,
  Lightbulb,
  Users,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  practiceAreas,
  getPracticeArea,
  getTeamMembersByPracticeArea,
  getCaseStudiesByPracticeArea,
} from '@/lib/config';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  Scale,
  Home,
  Landmark,
  Lightbulb,
  Users,
};

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    return {
      title: 'Practice Area Not Found',
    };
  }

  return {
    title: area.name,
    description: area.description.slice(0, 160),
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const area = getPracticeArea(slug);

  if (!area) {
    notFound();
  }

  const teamLeads = getTeamMembersByPracticeArea(area.slug);
  const relatedCases = getCaseStudiesByPracticeArea(area.slug);
  const Icon = iconMap[area.icon] || Scale;

  // Get other practice areas for sidebar
  const otherAreas = practiceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={area.image}
            alt={area.name}
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 to-navy-900/85" />
        </div>

        <Container className="relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Practice Areas
          </Link>

          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center mb-6">
              <Icon className="w-8 h-8 text-navy-950" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              {area.name}
            </h1>

            <p className="text-xl text-navy-200 leading-relaxed">
              {area.shortDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section background="light">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-navy-700 leading-relaxed text-lg">
                  {area.description}
                </p>
              </div>

              {/* Services List */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                  Our {area.name} Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-cream-100 rounded-sm"
                    >
                      <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                      <span className="text-navy-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Leads */}
              {teamLeads.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Practice Leadership
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {teamLeads.map((member) => (
                      <Link key={member.slug} href={`/team/${member.slug}`}>
                        <Card variant="elevated" padding="md" hover className="flex gap-4">
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
                    ))}
                  </div>
                </div>
              )}

              {/* Related Case Studies */}
              {relatedCases.length > 0 && (
                <div>
                  <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">
                    Related Case Studies
                  </h2>
                  <div className="space-y-4">
                    {relatedCases.map((study) => (
                      <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                        <Card variant="elevated" padding="md" hover>
                          <div className="flex justify-between items-start">
                            <div>
                              <span className="text-gold-600 text-sm font-medium">
                                {study.industry} | {study.year}
                              </span>
                              <h3 className="font-serif font-bold text-navy-900 mt-1">
                                {study.title}
                              </h3>
                              <p className="text-navy-600 text-sm mt-2">
                                {study.summary}
                              </p>
                            </div>
                            <div className="bg-gold-500 text-navy-950 px-3 py-1 rounded-sm text-sm font-bold flex-shrink-0 ml-4">
                              {study.value}
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <Card variant="dark" padding="lg" className="mb-8 sticky top-24">
                <h3 className="text-xl font-serif font-bold text-white mb-4">
                  Need {area.name} Assistance?
                </h3>
                <p className="text-navy-300 mb-6">
                  Our attorneys are ready to help with your {area.name.toLowerCase()}{' '}
                  matters. Schedule a consultation to discuss your needs.
                </p>
                <Link href="/contact">
                  <Button variant="primary" className="w-full group">
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>

              {/* Other Practice Areas */}
              <Card variant="elevated" padding="lg">
                <h3 className="text-lg font-serif font-bold text-navy-900 mb-4">
                  Other Practice Areas
                </h3>
                <div className="space-y-3">
                  {otherAreas.map((otherArea) => {
                    const OtherIcon = iconMap[otherArea.icon] || Scale;
                    return (
                      <Link
                        key={otherArea.slug}
                        href={`/services/${otherArea.slug}`}
                        className="flex items-center gap-3 p-3 rounded-sm hover:bg-cream-100 transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gold-500/10 rounded-sm flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                          <OtherIcon className="w-5 h-5 text-gold-600" />
                        </div>
                        <span className="text-navy-700 group-hover:text-navy-900 transition-colors">
                          {otherArea.name}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-navy-200 text-lg mb-8">
              Contact our {area.name} team today to discuss how we can assist with
              your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="group">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="secondary" size="lg">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
