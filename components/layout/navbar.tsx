'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, Scale } from 'lucide-react';
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
      {/* Top Bar - Fixed on desktop, hidden when scrolled */}
      <div
        className={clsx(
          'hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
        )}
      >
        <div className="bg-navy-950 text-navy-200 text-sm border-b border-navy-800">
          <Container>
            <div className="flex justify-between items-center py-2.5">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-gold-500" />
                  <span>Established {siteConfig.founded}</span>
                </span>
                <span className="text-navy-600">|</span>
                <span>New York | Los Angeles | Chicago</span>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 hover:text-gold-400 transition-colors font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <span className="text-gold-500 font-medium">24/7 Free Consultation</span>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={clsx(
          'fixed left-0 right-0 z-50 transition-all duration-500',
          isScrolled
            ? 'top-0 bg-navy-950/98 backdrop-blur-xl shadow-premium'
            : 'lg:top-[41px] top-0 bg-transparent'
        )}
      >
        <Container>
          <nav className={clsx(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-20' : 'h-24'
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              {/* Logo Mark */}
              <div className={clsx(
                'flex items-center justify-center transition-all duration-300',
                isScrolled ? 'w-10 h-10' : 'w-12 h-12'
              )}>
                <div className="w-full h-full bg-gold-500 flex items-center justify-center">
                  <span className="text-navy-950 font-serif font-bold text-xl">M</span>
                </div>
              </div>

              {/* Logo Text */}
              <div className="hidden sm:block">
                <span className="text-white font-serif text-xl font-bold tracking-tight group-hover:text-gold-400 transition-colors">
                  Morrison
                </span>
                <span className="text-gold-500 font-serif text-xl"> & Associates</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'nav-link-premium text-sm lg:text-base',
                    pathname === item.href && 'active'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <button className="btn-premium text-sm">
                  Free Consultation
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </nav>
        </Container>

        {/* Mobile Menu */}
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
                <div className="py-8 space-y-2">
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
                          'block py-4 px-4 text-lg font-medium border-b border-navy-800 transition-colors',
                          pathname === item.href
                            ? 'text-gold-400 border-gold-500/30'
                            : 'text-white hover:text-gold-400 hover:pl-6'
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pt-6"
                  >
                    <Link href="/contact" className="block">
                      <button className="w-full btn-premium">
                        Free Consultation
                      </button>
                    </Link>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-3 mt-4 py-4 text-gold-400 text-lg font-medium"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.phone}
                    </a>
                    <p className="text-center text-navy-400 text-sm mt-2">
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
