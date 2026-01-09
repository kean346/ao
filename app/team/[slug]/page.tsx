import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Mail,
  Phone,
  Linkedin,
  GraduationCap,
  Scale,
  Briefcase,
  Award,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { Container, Section } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  teamMembers,
  getTeamMember,
  getCaseStudiesByTeamMember,
  practiceAreas,
} from '@/lib/config';

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return {
      title: 'Attorney Not Found',
    };
  }

  return {
    title: `${member.name} - ${member.title}`,
    description: member.bio.slice(0, 160),
  };
}

export default async function TeamMemberPage({ params }: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  const relatedCases = getCaseStudiesByTeamMember(member.slug);
  const memberPracticeAreas = practiceAreas.filter((area) =>
    member.practiceAreas.some(
      (mp) => area.name.toLowerCase().includes(mp.toLowerCase()) || mp.toLowerCase().includes(area.name.toLowerCase())
    )
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy-900 py-12">
        <Container>
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Team
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Photo and Contact */}
            <div>
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Contact Card */}
              <Card variant="dark" padding="lg">
                <h3 className="font-serif font-bold text-white mb-4">Contact</h3>
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {member.email}
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {member.phone}
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-navy-700">
                  <Link href="/contact">
                    <Button variant="primary" className="w-full">
                      Schedule Consultation
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Bio and Details */}
            <div className="lg:col-span-2">
              <div className="mb-2">
                <span className="text-gold-400 font-medium">{member.title}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                {member.name}
              </h1>
              <p className="text-navy-300 text-lg mb-8">{member.role}</p>

              <div className="prose prose-lg prose-invert max-w-none mb-8">
                <p className="text-navy-200 leading-relaxed">{member.bio}</p>
              </div>

              {/* Highlights */}
              {member.highlights && member.highlights.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-500" />
                    Notable Achievements
                  </h3>
                  <ul className="space-y-2">
                    {member.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3 text-navy-300">
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Practice Areas */}
              <div className="mb-8">
                <h3 className="text-xl font-serif font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gold-500" />
                  Practice Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.practiceAreas.map((area) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-navy-800 border border-navy-700 rounded-sm text-navy-200 text-sm"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Education and Bar Admissions */}
      <Section background="light">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-gold-600" />
                Education
              </h3>
              <ul className="space-y-3">
                {member.education.map((edu, index) => (
                  <li key={index} className="flex items-start gap-3 text-navy-700">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {edu}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Bar Admissions */}
            <Card variant="elevated" padding="lg">
              <h3 className="text-xl font-serif font-bold text-navy-900 mb-6 flex items-center gap-2">
                <Scale className="w-6 h-6 text-gold-600" />
                Bar Admissions
              </h3>
              <ul className="space-y-3">
                {member.barAdmissions.map((bar, index) => (
                  <li key={index} className="flex items-start gap-3 text-navy-700">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                    {bar}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Representative Matters */}
      {member.cases && member.cases.length > 0 && (
        <Section background="cream">
          <Container>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              Representative Matters
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {member.cases.map((caseItem, index) => (
                <Card key={index} variant="elevated" padding="md">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5 text-gold-600" />
                  </div>
                  <p className="text-navy-800 font-medium">{caseItem}</p>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related Case Studies */}
      {relatedCases.length > 0 && (
        <Section background="light">
          <Container>
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-8">
              Related Case Studies
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedCases.map((study) => (
                <Link key={study.slug} href={`/case-studies/${study.slug}`}>
                  <Card variant="elevated" padding="lg" hover className="h-full">
                    <span className="text-gold-600 text-sm font-medium">
                      {study.practiceArea}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-navy-900 mt-2 mb-3">
                      {study.title}
                    </h3>
                    <p className="text-navy-600 text-sm mb-4">{study.summary}</p>
                    <div className="flex items-center text-gold-600 font-medium text-sm">
                      Read Case Study
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section background="gradient">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Work with {member.name.split(' ')[0]}
            </h2>
            <p className="text-navy-200 text-lg mb-8">
              Schedule a consultation to discuss how {member.name.split(' ')[0]}'s
              expertise can help with your legal needs.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
