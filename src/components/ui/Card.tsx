import type { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: 'panel' | 'glass';
};

export function Card({ className = '', variant = 'panel', ...rest }: Props) {
  const base = 'rounded-bx-xl';
  const variants = {
    panel: 'bg-base border border-stroke-elements',
    glass: 'bg-white/15 backdrop-blur-md border border-white/30',
  } as const;

  return <div className={`${base} ${variants[variant]} ${className}`} {...rest} />;
}
