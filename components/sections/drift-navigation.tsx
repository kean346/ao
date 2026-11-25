'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import './drift-navigation.css';

export function DriftNavigation({
  onHome = false,
  onReplay,
}: {
  onHome?: boolean;
  onReplay?: () => void;
}) {
  const links = [
    { href: onHome ? '#services' : '/#services', label: 'Services' },
    { href: onHome ? '#about' : '/about', label: 'About AO' },
    { href: '/why-ao', label: 'Why choose AO?' },
    { href: '/contact#quote-form', label: 'Request a quote' },
  ];
  const [open, setOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    }

    function closeOnOutsideClick(event: PointerEvent) {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(false);
    }

    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOnOutsideClick);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOnOutsideClick);
    };
  }, [open]);

  return (
    <nav ref={nav} aria-label="Main" className="drift-nav" data-open={open}>
      <div className="drift-nav-pill">
        <Link href="/" className="drift-brand" onClick={() => setOpen(false)}>AO Enterprises</Link>
        <button
          ref={toggle}
          type="button"
          className="drift-menu-toggle"
          aria-expanded={open}
          aria-controls="drift-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(value => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <ul id="drift-menu" className="drift-dropdown" inert={!open}>
        {links.map(({ href, label }) => (
          <li key={href}><Link href={href} onClick={() => setOpen(false)}>{label}</Link></li>
        ))}
        {onReplay && (
          <li className="drift-replay">
            <button type="button" onClick={() => {
              setOpen(false);
              toggle.current?.focus();
              onReplay();
            }}>Replay entrance</button>
          </li>
        )}
      </ul>
    </nav>
  );
}
