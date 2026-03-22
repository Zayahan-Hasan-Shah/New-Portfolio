import type { RefObject } from 'react';

import { useGSAP } from './useGSAP';
import { gsap, ScrollTrigger } from '../utils/gsap';

export function useRevealAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const targets = root.querySelectorAll<HTMLElement>('.bx-animate-in-up');
      if (targets.length === 0) return;

      gsap.set(targets, { opacity: 0, y: 32, filter: 'blur(10px)' });

      ScrollTrigger.batch(targets, {
        interval: 0.12,
        batchMax: 8,
        start: 'top 85%',
        once: false,
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.09,
            overwrite: true,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            opacity: 0,
            y: 32,
            filter: 'blur(10px)',
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.03,
            overwrite: true,
          });
        },
      });
    },
    { scope },
  );
}
