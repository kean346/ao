'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { procurementStages } from '@/lib/config';
import { useMotionAllowed } from '@/lib/use-motion-allowed';

export function ProcurementProcess() {
  const timeline = useRef<HTMLOListElement>(null);
  const motionAllowed = useMotionAllowed();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: timeline, offset: ['start 0.90', 'end 0.38'] });
  const line = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useMotionValueEvent(scrollYProgress, 'change', progress => {
    if (motionAllowed) {
      setActive(Math.min(Math.floor(progress * procurementStages.length), procurementStages.length - 1));
    }
  });

  return (
    <section className="process section-space" aria-labelledby="process-title">
      <div className="frame-width">
        <div className="process-heading">
          <p className="eyebrow">Procurement process</p>
          <h2 id="process-title">From brief to <em>delivery.</em></h2>
        </div>
        <ol ref={timeline} className="process-list">
          {procurementStages.map((stage, index) => (
            <li
              key={stage.title}
              data-reached={motionAllowed && index <= active}
              aria-current={motionAllowed && active === index ? 'step' : undefined}
            >
              {index === 0 && (
                <div className="process-line" aria-hidden="true">
                  {motionAllowed && <motion.span style={{ '--process-progress': line } as React.CSSProperties} />}
                </div>
              )}
              <span className="process-dot" aria-hidden="true" />
              <span className="process-number">0{index + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
