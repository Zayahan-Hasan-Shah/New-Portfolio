import { useGSAP as useGSAPBase } from '@gsap/react';
import type { ContextFunc, useGSAPConfig } from '@gsap/react';

import '../utils/gsap';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

type Options = Omit<useGSAPConfig, 'callback'>;

export function useGSAP(callback: ContextFunc, options?: Options) {
  const reduced = usePrefersReducedMotion();

  return useGSAPBase(reduced ? () => undefined : callback, {
    ...(options ?? {}),
    revertOnUpdate: options?.revertOnUpdate ?? false,
  });
}
