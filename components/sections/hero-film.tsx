'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useMotionAllowed } from '@/lib/use-motion-allowed';

export function HeroFilm() {
  const playVideo = useMotionAllowed();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!playVideo || !video) return;

    function resume() {
      if (!video || document.hidden || !video.paused) return;
      video.muted = true;
      void video.play().catch(() => {
        // Browser playback policies can still restrict autoplay.
      });
    }

    const visibility = typeof IntersectionObserver === 'undefined' ? null : new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) resume();
    });
    visibility?.observe(video);
    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pageshow', resume);
    resume();

    return () => {
      visibility?.disconnect();
      document.removeEventListener('visibilitychange', resume);
      window.removeEventListener('pageshow', resume);
    };
  }, [playVideo]);

  return (
    <div className="drift-hero-film" aria-hidden="true">
      <Image
        src="/media/press-poster.webp"
        alt=""
        fill
        priority
        sizes="(max-aspect-ratio: 16/9) 178svh, 100vw"
      />
      {playVideo && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          poster="/media/press-poster.webp"
          onError={event => { event.currentTarget.hidden = true; }}
        >
          <source src="/media/press-mobile.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/media/press-4k.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
