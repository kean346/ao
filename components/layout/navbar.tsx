'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Scale, MapPin, Award, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { siteConfig } from '@/lib/config';
import { Container } from '@/components/ui/container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar - Prestigious Info Strip */}
      <div
        className={clsx(
          'hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        )}
      >
        <div className="bg-navy-950 border-b border-navy-800">
          <Container>
            <div className="flex justify-between items-center py-2.5">
              {/* Left - Credentials */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-navy-300 text-sm">
                  <Award className="w-4 h-4 text-gold-500" />
                  <span>Established {siteConfig.founded}</span>
                </div>
                <span className="text-navy-700">|</span>
                <div className="flex items-center gap-2 text-navy-300 text-sm">
                  <MapPin className="w-4 h-4 text-gold-500" />
                  <span>New York | Los Angeles | Chicago</span>
                </div>
              </div>

              {/* Right - Contact */}
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-white hover:text-gold-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <span className="px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded text-gold-400 text-sm font-medium">
                  24/7 Free Consultation
                </span>
              </div>
            </div>
          </Container>
        </div>
        {/* Gold accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      </div>

      {/* Main Navbar - Law Firm Premium Style */}
      <header
        className={clsx(
          'fixed left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'top-0 bg-navy-950/98 backdrop-blur-xl shadow-premium'
            : 'lg:top-[49px] top-0 bg-navy-950/95 backdrop-blur-sm'
        )}
      >
        {/* Subtle gold line when scrolled */}
        {isScrolled && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        )}

        <Container>
          <nav className={clsx(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-20' : 'h-24'
          )}>
            {/* Logo - Premium Law Firm Style */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo Mark with Scale of Justice */}
              <div className={clsx(
                'flex items-center justify-center transition-all duration-300',
                isScrolled ? 'w-11 h-11' : 'w-12 h-12'
              )}>
                <div className="w-full h-full bg-gold-500 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-navy-950" />
                </div>
              </div>

              {/* Logo Text - Elegant Typography */}
              <div className="hidden sm:block">
                <div className="flex items-baseline gap-1">
                  <span className="text-white font-serif text-xl font-bold tracking-tight group-hover:text-gold-400 transition-colors">
                    Morrison
                  </span>
                  <span className="text-gold-500 font-serif text-xl">
                    & Associates
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="w-8 h-[1px] bg-gold-500/50" />
                  <span className="text-[10px] text-navy-400 uppercase tracking-[0.2em]">
                    Attorneys at Law
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Elegant Underline Style */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group py-2"
                >
                  <span className={clsx(
                    'text-sm font-medium tracking-wide transition-colors',
                    pathname === item.href
                      ? 'text-gold-400'
                      : 'text-navy-200 group-hover:text-white'
                  )}>
                    {item.name}
                  </span>
                  {/* Underline indicator */}
                  <span className={clsx(
                    'absolute -bottom-1 left-0 h-[2px] bg-gold-500 transition-all duration-300',
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              ))}
            </div>

            {/* CTA Button - Premium Gold */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 text-navy-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">Call Us</span>
              </a>
              <Link href="/contact">
                <button className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40">
                  Free Consultation
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu - Premium Slide Down */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-950 border-t border-navy-800 overflow-hidden"
            >
              <Container>
                <div className="py-6 space-y-1">
                  {siteConfig.navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={clsx(
                          'flex items-center justify-between py-4 px-4 text-lg font-medium border-b border-navy-800 transition-all',
                          pathname === item.href
                            ? 'text-gold-400 border-gold-500/30 bg-navy-900/50'
                            : 'text-white hover:text-gold-400 hover:pl-6 hover:bg-navy-900/30'
                        )}
                      >
                        {item.name}
                        <ChevronRight className="w-4 h-4 opacity-40" />
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6 space-y-4"
                  >
                    {/* Credentials */}
                    <div className="flex items-center gap-4 px-4 py-3 bg-navy-900/50 rounded">
                      <Award className="w-5 h-5 text-gold-500" />
                      <div>
                        <p className="text-white font-medium">Established {siteConfig.founded}</p>
                        <p className="text-navy-400 text-sm">Trusted Legal Counsel</p>
                      </div>
                    </div>

                    <Link href="/contact" className="block">
                      <button className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold tracking-wide transition-colors">
                        Free Consultation
                      </button>
                    </Link>

                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-3 py-4 text-gold-400 text-lg font-medium"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.phone}
                    </a>

                    <p className="text-center text-navy-400 text-sm">
                      Available 24/7
                    </p>
                  </motion.div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
