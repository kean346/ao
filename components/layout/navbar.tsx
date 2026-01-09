'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { siteConfig } from '@/lib/config';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy-950 text-navy-200 text-sm">
        <Container>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-6">
              <span>Established {siteConfig.founded}</span>
              <span className="text-navy-600">|</span>
              <span>New York | Washington D.C. | Boston</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-gold-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header
        className={clsx(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-navy-900/98 backdrop-blur-md shadow-lg'
            : 'bg-navy-900'
        )}
      >
        <Container>
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-sm flex items-center justify-center">
                <span className="text-navy-950 font-serif font-bold text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-serif text-xl font-bold tracking-tight group-hover:text-gold-400 transition-colors">
                  Sterling
                </span>
                <span className="text-gold-500 font-serif text-xl"> & Associates</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'nav-link py-2',
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
                <Button variant="primary" size="md">
                  Free Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gold-400 transition-colors"
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

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-800 border-t border-navy-700 overflow-hidden"
            >
              <Container>
                <div className="py-6 space-y-4">
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
                          'block py-3 px-4 text-lg font-medium rounded-sm transition-colors',
                          pathname === item.href
                            ? 'text-gold-400 bg-navy-700/50'
                            : 'text-white hover:text-gold-400 hover:bg-navy-700/30'
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
                    className="pt-4 border-t border-navy-700"
                  >
                    <Link href="/contact" className="block">
                      <Button variant="primary" size="lg" className="w-full">
                        Free Consultation
                      </Button>
                    </Link>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2 mt-4 py-3 text-gold-400"
                    >
                      <Phone className="w-5 h-5" />
                      {siteConfig.phone}
                    </a>
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
