'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram, ArrowRight, Scale, Award, Shield } from 'lucide-react';
import { siteConfig, practiceAreas } from '@/lib/config';
import { Container } from '@/components/ui/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-burgundy-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[100px]" />

      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {/* Main Footer */}
      <div className="py-16 md:py-24 relative z-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Company Info - Larger Column */}
            <div className="lg:col-span-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold-500 flex items-center justify-center">
                  <span className="text-navy-950 font-serif font-bold text-2xl">M</span>
                </div>
                <div>
                  <span className="text-white font-serif text-xl font-bold">Morrison</span>
                  <span className="text-gold-500 font-serif text-xl"> & Associates</span>
                </div>
              </Link>

              <p className="text-navy-300 mb-6 leading-relaxed">
                {siteConfig.tagline}
              </p>

              <p className="text-navy-400 text-sm mb-6">
                Premier legal representation since {siteConfig.founded}. Serving clients in New York, Los Angeles, and Chicago.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 border border-navy-700 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-6">
                Practice Areas
              </h3>
              <ul className="space-y-3">
                {practiceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/services/${area.slug}`}
                      className="text-navy-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500" />
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-navy-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all text-gold-500" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-sm font-semibold text-gold-500 uppercase tracking-wider mb-6">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex gap-3 group"
                  >
                    <Phone className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold group-hover:text-gold-400 transition-colors">
                        {siteConfig.phone}
                      </p>
                      <p className="text-navy-400 text-sm">Available 24/7</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex gap-3 group"
                  >
                    <Mail className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-navy-300 group-hover:text-gold-400 transition-colors">
                      {siteConfig.email}
                    </p>
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div className="text-navy-300">
                    <p className="font-medium text-white">New York Office</p>
                    <p className="text-sm">{siteConfig.locations[0].address}</p>
                    <p className="text-sm">{siteConfig.locations[0].city}, {siteConfig.locations[0].state} {siteConfig.locations[0].zip}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-navy-300 text-sm">Mon - Fri: 8:00 AM - 7:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Credentials Bar */}
      <div className="border-t border-navy-800 py-8 relative z-10">
        <Container>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            {siteConfig.credentials.slice(0, 6).map((credential) => (
              <div
                key={credential.abbreviation}
                className="flex items-center gap-2 text-navy-400 text-sm hover:text-gold-500 transition-colors"
              >
                <Award className="w-4 h-4" />
                <span>{credential.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 py-6 relative z-10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm text-center md:text-left">
              {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/privacy" className="text-navy-400 hover:text-gold-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-navy-400 hover:text-gold-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="text-navy-400 hover:text-gold-400 transition-colors">
                Legal Disclaimer
              </Link>
              <Link href="/sitemap" className="text-navy-400 hover:text-gold-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <p className="text-navy-500 text-xs text-center mt-6">
            Attorney advertising. Prior results do not guarantee a similar outcome. This website is for informational purposes only and does not constitute legal advice.
          </p>
        </Container>
      </div>
    </footer>
  );
}
