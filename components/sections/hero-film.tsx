'use client';

import Image from 'next/image';
import { useMotionAllowed } from '@/lib/use-motion-allowed';

export function HeroFilm() {
  const playVideo = useMotionAllowed();

  return (
    <div className="press-film" aria-hidden="true">
      <Image src="/media/press-poster.webp" alt="" fill priority sizes="100vw" />
      {playVideo && (
        <video
          autoPlay muted loop playsInline disablePictureInPicture
          poster="/media/press-poster.webp"
          onPlaying={event => { event.currentTarget.dataset.playing = 'true'; }}
          onError={event => { event.currentTarget.dataset.playing = 'false'; }}
        >
          <source src="/media/press-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/media/press-4k.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
