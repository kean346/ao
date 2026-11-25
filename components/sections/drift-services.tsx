'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { DriftMark } from '@/components/sections/drift-mark';
import { DriftQuoteBar } from '@/components/sections/drift-quote-bar';
import { services } from '@/lib/config';
import { useMotionAllowed } from '@/lib/use-motion-allowed';
import styles from './drift-services.module.css';

const cardPhotos: Record<string, { src: string; alt: string }> = {
  'bulk-stationery-supply': {
    src: '/media/drift-stationery.webp',
    alt: 'Paper reams, notebooks and envelopes on a sunlit worktable',
  },
  'commercial-paper-printing': {
    src: '/media/drift-printing.webp',
    alt: 'An orange and black print proof passing through an offset press',
  },
  'long-term-supply-contracts': {
    src: '/media/drift-fulfilment.webp',
    alt: 'Cartons and wrapped paper reams packed on a dispatch pallet',
  },
};

export function DriftServices() {
  const motionAllowed = useMotionAllowed();
  const list = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(`feature-${services[0].slug}`);

  useEffect(() => {
    if (!list.current || !('IntersectionObserver' in window)) return;

    const cards = Array.from(list.current.querySelectorAll('article'));
    const visible = new Set<Element>();
    const highlight = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (isIntersecting) visible.add(target);
        else visible.delete(target);
      }
      const [closest] = [...visible].sort((a, b) => {
        const center = window.innerHeight / 2;
        const first = a.getBoundingClientRect();
        const second = b.getBoundingClientRect();
        return Math.abs(first.top + first.height / 2 - center) -
          Math.abs(second.top + second.height / 2 - center);
      });
      if (closest) setActive(closest.id);
    }, { threshold: [0, 0.2, 0.4, 0.6, 0.8, 1] });
    const reveal = motionAllowed ? new IntersectionObserver(entries => {
      for (const { target, isIntersecting, intersectionRatio } of entries) {
        if (!isIntersecting) target.setAttribute('data-reveal', 'waiting');
        else if (intersectionRatio >= 0.14) target.setAttribute('data-reveal', 'visible');
      }
    }, { threshold: [0, 0.14] }) : null;

    for (const card of cards) {
      highlight.observe(card);
      reveal?.observe(card);
    }

    return () => {
      highlight.disconnect();
      reveal?.disconnect();
      for (const card of cards) card.removeAttribute('data-reveal');
    };
  }, [motionAllowed]);

  function showService(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: motionAllowed ? 'smooth' : 'auto',
      block: 'center',
    });
  }

  return (
    <section id="services" className={styles.section} aria-labelledby="drift-services-title">
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.inner}>
        <aside className={styles.aside}>
          <h2 id="drift-services-title">Supply that keeps your organisation moving</h2>
          <nav className={styles.serviceNav} aria-label="Explore services">
            {services.map(service => {
              const id = `feature-${service.slug}`;
              return (
                <button
                  key={id}
                  type="button"
                  aria-controls={id}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => showService(id)}
                >
                  {service.title}
                </button>
              );
            })}
          </nav>
          <Link className={styles.allServices} href="/services">View all services</Link>
          <DriftQuoteBar className={styles.cta} />
        </aside>

        <div className={styles.cards} ref={list}>
          {services.map(service => (
            <article className={styles.card} id={`feature-${service.slug}`} key={service.slug}>
              <DriftMark className={styles.mark} />
              <h3>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </h3>
              <div className={styles.media}>
                <Image
                  src={cardPhotos[service.slug]?.src ?? service.image}
                  alt={cardPhotos[service.slug]?.alt ?? service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 90vw"
                />
              </div>
              <p>{service.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
