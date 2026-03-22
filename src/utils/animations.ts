import { gsap } from 'gsap';

export type TweenVars = Parameters<typeof gsap.to>[1];

void gsap;

export const eases = {
  out: 'power3.out',
  inOut: 'power2.inOut',
} as const;

export const fadeUp: TweenVars = {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: eases.out,
};
