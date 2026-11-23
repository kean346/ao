'use client';

import Image from 'next/image';
import { useMotionAllowed } from '@/lib/use-motion-allowed';

export function HeroFilm() {
  const playVideo = useMotionAllowed();

  return (
    <div className="hero-film" aria-hidden="true">
      <div className="hero-film-media">
        <Image
          src="/media/black-ice-poster.webp"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        {playVideo && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onPlaying={event => { event.currentTarget.dataset.playing = 'true'; }}
          >
            <source src="/media/black-ice-4k.mp4" type="video/mp4" media="(min-width: 1100px)" />
            <source src="/media/black_ice_logo.webm" type={'video/webm; codecs="av01.0.05M.08"'} />
            <source src="/media/black_ice_logo.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
}
