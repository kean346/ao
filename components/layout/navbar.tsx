'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Brand } from '@/components/layout/brand';
import { siteConfig } from '@/lib/config';

export function Navbar() {
  const pathname = usePathname();
  const [openOnPage, setOpenOnPage] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const menuOpen = openOnPage === pathname;

  useEffect(() => setOpenOnPage(null), [pathname]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenOnPage(null);
        toggle.current?.focus();
      }
    };

    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setOpenOnPage(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    desktop.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      desktop.removeEventListener('change', closeOnDesktop);
    };
  }, [menuOpen]);

  const links = siteConfig.navigation.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? 'page' : undefined}
      data-active={pathname === href || (href === '/#services' && pathname.startsWith('/services/')) || pathname.startsWith(href + '/')}
      onClick={() => setOpenOnPage(null)}
    >
      {label}
    </Link>
  ));

  const quoteLink = (
    <Link className="nav-quote" href="/contact#quote-form" onClick={() => setOpenOnPage(null)}>
      Request a quote
      <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.6} />
    </Link>
  );

  return (
    <header className="site-header dark-surface" data-scrolled={scrolled} data-home={pathname === '/'} data-open={menuOpen}>
      <div className="frame-width header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main">
          {links}
        </nav>
        <div className="desktop-quote">{quoteLink}</div>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setOpenOnPage(menuOpen ? null : pathname)}
        >
          {menuOpen ? 'Close' : 'Menu'}
          {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        </button>
      </div>
      <nav id="mobile-menu" className="mobile-menu frame-width" aria-label="Main" hidden={!menuOpen}>
        {links}
        {quoteLink}
      </nav>
    </header>
  );
}
