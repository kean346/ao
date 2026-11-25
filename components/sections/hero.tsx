'use client';

import type { CSSProperties } from 'react';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DriftNavigation } from '@/components/sections/drift-navigation';
import { BrassRings } from '@/components/sections/brass-rings';

const cornerCopy = [
  { position: 'top-left', lines: ['Commercial supply', '& procurement'], delay: 700 },
  { position: 'top-right', lines: ['Built for', 'bulk orders'], delay: 760 },
  { position: 'bottom-left', lines: ['Stationery, print', '& fulfilment'], delay: 1090 },
  { position: 'bottom-right', lines: ['Pretoria', 'South Africa'], delay: 1150 },
];

export function Hero() {
  const stage = useRef<HTMLElement>(null);
  const played = useRef(false);

  function playEntrance() {
    const hero = stage.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    played.current = true;
    hero.dataset.entrance = 'reset';
    // Flush the reset so clicking replay starts a fresh CSS animation.
    void hero.offsetWidth;
    hero.dataset.entrance = 'playing';
  }

  useEffect(() => {
    const hero = stage.current;
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    let cancelled = false;
    const assets = Array.from(hero.querySelectorAll('img'), image => image.decode());
    assets.push(document.fonts.ready.then(() => undefined));

    function start() {
      if (cancelled || played.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(playEntrance);
    }

    const fallback = setTimeout(start, 1100);
    void Promise.allSettled(assets).then(() => {
      clearTimeout(fallback);
      start();
    });

    return () => {
      cancelled = true;
      clearTimeout(fallback);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="brass-hero" data-entrance="loading" ref={stage} aria-labelledby="home-title">
      <Image className="brass-hero-texture" src="/media/smoked-brass.webp" alt="" fill priority unoptimized />
      <div className="brass-hero-shade" aria-hidden="true" />
      <Image
        className="brass-hero-star"
        src="/media/folded-paper-star.webp"
        alt=""
        width={900}
        height={822}
        priority
        unoptimized
      />
      <BrassRings />
      <h1 id="home-title" className="brass-hero-title" aria-label="AO Enterprises">
        {Array.from('AO ENTERPRISES', (letter, index) => (
          <span aria-hidden="true" key={index}>
            <span style={{ '--delay': `${200 + index * 38}ms` } as CSSProperties}>{letter}</span>
          </span>
        ))}
      </h1>
      <DriftNavigation onHome onReplay={playEntrance} />
      {cornerCopy.map(({ position, lines, delay }) => (
        <p className={`brass-hero-copy brass-hero-${position}`} key={position}>
          {lines.map((line, index) => (
            <span className="brass-hero-line" key={line}>
              <span style={{ '--delay': `${delay + index * 90}ms` } as CSSProperties}>{line}</span>
            </span>
          ))}
        </p>
      ))}
      <div className="brass-hero-actions">
        <Link href="/contact#quote-form">Request a quote</Link>
        <Link href="#services">View services</Link>
      </div>
    </section>
  );
}
