import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

type Variant = 'accent' | 'outline' | 'ghost';
type Size = 'sm' | 'md';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className = '', variant = 'accent', size = 'md', type = 'button', ...rest },
  ref,
) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap select-none rounded-bx-m font-bold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 disabled:opacity-50 disabled:pointer-events-none';

  const sizes: Record<Size, string> = {
    sm: 'h-[4.4rem] px-[2rem] text-[1.6rem] leading-[4.4rem]',
    md: 'h-[5rem] px-[2rem] text-[1.6rem] leading-[5rem]',
  };

  const variants: Record<Variant, string> = {
    accent:
      'bg-accent-gradient text-white hover:scale-[1.03]',
    outline:
      'border border-stroke-controls bg-transparent text-text-bright hover:scale-[1.03] hover:bg-white/15',
    ghost: 'bg-transparent text-text-bright hover:bg-white/15',
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    />
  );
});
