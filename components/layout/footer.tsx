'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react';
import { siteConfig, practiceAreas } from '@/lib/config';
import { Container } from '@/components/ui/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center">
                  <span className="text-navy-950 font-serif font-bold text-xl">S</span>
                </div>
                <div>
                  <span className="text-white font-serif text-xl font-bold">Sterling</span>
                  <span className="text-gold-500 font-serif text-xl"> & Associates</span>
                </div>
              </Link>
              <p className="text-navy-300 mb-6 leading-relaxed">
                {siteConfig.tagline}. Serving clients with excellence since {siteConfig.founded}.
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-950 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-6 text-white">Practice Areas</h3>
              <ul className="space-y-3">
                {practiceAreas.slice(0, 6).map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/services/${area.slug}`}
                      className="text-navy-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {siteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-navy-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/contact"
                    className="text-navy-300 hover:text-gold-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    Schedule Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-6 text-white">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div className="text-navy-300">
                    <p className="font-medium text-white">New York Office</p>
                    <p>{siteConfig.locations[0].address}</p>
                    <p>{siteConfig.locations[0].city}, {siteConfig.locations[0].state} {siteConfig.locations[0].zip}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-navy-300 hover:text-gold-400 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-navy-300">Mon - Fri: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Credentials Bar */}
      <div className="border-t border-navy-800 py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {siteConfig.credentials.slice(0, 6).map((credential) => (
              <div
                key={credential.abbreviation}
                className="text-navy-400 text-sm font-medium"
              >
                {credential.name}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800 py-6">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-400 text-sm text-center md:text-left">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
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
          <p className="text-navy-500 text-xs text-center mt-4">
            Attorney advertising. Prior results do not guarantee a similar outcome.
          </p>
        </Container>
      </div>
    </footer>
  );
}
