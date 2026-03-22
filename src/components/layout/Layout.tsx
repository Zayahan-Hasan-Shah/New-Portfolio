import type { PropsWithChildren } from 'react';
import { useRef } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { SidebarProfileCard } from './SidebarProfileCard';
import { useRevealAnimations } from '../../hooks/useRevealAnimations.ts';

export function Layout({ children }: PropsWithChildren) {
  const scope = useRef<HTMLDivElement | null>(null);
  useRevealAnimations(scope);

  return (
    <div ref={scope} className="min-h-dvh bg-base font-sans text-text-medium">
      <div className="gradient-background pointer-events-none" aria-hidden="true">
        <div className="bx-blur bx-blur-1" />
        <div className="bx-blur bx-blur-2" />
        <div className="bx-blur bx-blur-3" />
      </div>

      <SidebarProfileCard />

      <div className="bx-content">
        <Navbar className="" />

        <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-16 pt-[7.5rem] sm:px-6 lg:px-10 lg:pt-[11rem] 2xl:pt-[15rem]">
          <div className="min-w-0">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
