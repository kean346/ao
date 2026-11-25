'use client';

import { useEffect, useRef, useState } from 'react';
import { ServiceCard } from '@/components/sections/service-card';
import { DriftQuoteBar } from '@/components/sections/drift-quote-bar';
import { services } from '@/lib/config';
import { useMotionAllowed } from '@/lib/use-motion-allowed';
import styles from './drift-services.module.css';

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
          <DriftQuoteBar className={styles.cta} />
        </aside>

        <div className={styles.cards} ref={list}>
          {services.map(service => (
            <ServiceCard
              id={`feature-${service.slug}`}
              className={styles.card}
              key={service.slug}
              service={service}
              sizes="(min-width: 1024px) 31rem, 90vw"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
