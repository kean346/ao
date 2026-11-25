'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { Plus } from 'lucide-react';

export function HashDetails({ id, label, className, children }: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const disclosure = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let frame = 0;

    function openFromHash() {
      const details = disclosure.current;
      const target = document.getElementById(window.location.hash.slice(1));
      if (!details || !target || !details.contains(target) || details.open) return;

      details.open = true;
      // Targets inside a closed disclosure might have no scroll position yet.
      if (target !== details) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
      }
    }

    window.addEventListener('hashchange', openFromHash);
    openFromHash();
    return () => {
      window.removeEventListener('hashchange', openFromHash);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <details ref={disclosure} id={id} className={className ? `ao-disclosure ${className}` : 'ao-disclosure'}>
      <summary><span>{label}</span><Plus aria-hidden="true" size={19} /></summary>
      {children}
    </details>
  );
}
