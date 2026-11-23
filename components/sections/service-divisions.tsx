'use client';

import { useEffect, useRef, useState } from 'react';
import { ServiceCard } from '@/components/sections/service-card';
import { ActionLink } from '@/components/ui/action-link';
import { services } from '@/lib/config';

const pinQuery = '(min-width: 1024px) and (min-height: 720px) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

export function ServiceDivisions() {
  const pin = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);
  const jumpTo = useRef<((index: number, immediate?: boolean) => void) | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const panel = pin.current;
    const windowElement = frame.current;
    const list = track.current;
    if (!panel || !windowElement || !list) return;

    const cards = Array.from(list.children) as HTMLElement[];
    let disposed = false;
    let revert: (() => void) | undefined;
    const viewport = window.matchMedia(pinQuery);

    async function initialise() {
      if (!viewport.matches || revert) return;

      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/dist/ScrollTrigger'),
      ]);
      if (disposed || !viewport.matches || revert || !panel || !windowElement || !list) return;

      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      revert = () => media.revert();

      media.add(pinQuery, () => {
        panel.dataset.pinned = 'true';
        const distance = () => Math.max(0, list.scrollWidth - windowElement.clientWidth);
        const cardPosition = (card: HTMLElement) =>
          gsap.utils.clamp(0, distance(), card.offsetLeft + (card.offsetWidth - windowElement.clientWidth) / 2);
        let lastIndex = -1;

        function update() {
          const moved = -Number(gsap.getProperty(list, 'x'));
          const positions = cards.map(card => Math.abs(cardPosition(card) - moved));
          const index = positions.indexOf(Math.min(...positions));

          panel!.style.setProperty('--divisions-progress', String(moved / (distance() || 1)));
          if (index !== lastIndex) {
            lastIndex = index;
            setActive(index);
          }
        }

        const animation = gsap.to(list, {
          x: () => -distance(),
          ease: 'none',
          onUpdate: update,
          scrollTrigger: {
            trigger: panel,
            start: () => `top top+=${document.querySelector<HTMLElement>('.site-header')?.offsetHeight ?? 0}`,
            end: () => `+=${Math.max(distance(), window.innerHeight * 0.9)}`,
            pin: true,
            scrub: 0.38,
            invalidateOnRefresh: true,
            onRefresh: update,
          },
        });

        jumpTo.current = (index, immediate) => {
          const trigger = animation.scrollTrigger;
          if (!trigger) return;
          const progress = cardPosition(cards[index]) / (distance() || 1);
          const destination = trigger.start + (trigger.end - trigger.start) * progress;

          if (immediate) {
            trigger.scroll(destination);
            ScrollTrigger.update();
            trigger.getTween()?.progress(1);
          } else {
            window.scrollTo({ top: destination, behavior: 'smooth' });
          }
        };

        return () => {
          jumpTo.current = null;
          delete panel.dataset.pinned;
          panel.style.removeProperty('--divisions-progress');
        };
      });

      void document.fonts.ready.then(() => {
        if (!disposed) ScrollTrigger.refresh();
      });
    }

    const start = () => { void initialise(); };
    start();
    viewport.addEventListener('change', start);
    return () => {
      disposed = true;
      viewport.removeEventListener('change', start);
      revert?.();
    };
  }, []);

  return (
    <section id="services" className="divisions" aria-labelledby="divisions-title">
      <div ref={pin} className="divisions-pin">
        <div className="frame-width">
          <div className="divisions-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2 id="divisions-title">Three ways to <em>supply.</em></h2>
            </div>
            <ActionLink href="/services">View all services</ActionLink>
          </div>

          <div ref={frame} className="divisions-window">
            <ol
              ref={track}
              className="divisions-track"
              onFocusCapture={event => {
                const card = (event.target as HTMLElement).closest('li');
                const bounds = frame.current?.getBoundingClientRect();
                if (!jumpTo.current || !card || !bounds) return;
                const position = card.getBoundingClientRect();
                if (position.left < bounds.left - 2 || position.right > bounds.right + 2) {
                  jumpTo.current(Array.from(event.currentTarget.children).indexOf(card), true);
                }
              }}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.slug}
                  service={service}
                  active={index === active}
                  sizes="(min-width: 1024px) 54vw, (min-width: 650px) 45vw, 94vw"
                />
              ))}
            </ol>
          </div>

          <div className="divisions-controls" role="group" aria-label="Select a service">
            <div className="divisions-progress" aria-hidden="true"><span /></div>
            {services.map((service, index) => (
              <button
                key={service.slug}
                type="button"
                aria-label={`Show ${service.title}`}
                aria-pressed={index === active}
                onClick={() => jumpTo.current?.(index)}
              >
                {service.number}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
