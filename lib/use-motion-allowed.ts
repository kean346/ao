import { useSyncExternalStore } from 'react';

const motionPreference = '(prefers-reduced-motion: no-preference)';

function subscribe(callback: () => void) {
  const media = window.matchMedia(motionPreference);
  media.addEventListener('change', callback);
  return () => media.removeEventListener('change', callback);
}

function allowsMotion() {
  return window.matchMedia(motionPreference).matches;
}

export function useMotionAllowed() {
  return useSyncExternalStore(subscribe, allowsMotion, () => false);
}
