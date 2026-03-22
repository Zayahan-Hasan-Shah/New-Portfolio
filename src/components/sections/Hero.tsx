import { useRef } from 'react';

import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../utils/gsap';
import { Button } from '../ui/Button';
import cvPdf from '../../assets/resume/Zayahan Hasan Shah - CV.pdf';

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);

  const onDownloadCv = () => {
    const a = document.createElement('a');
    a.href = cvPdf;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.download = 'Zayahan Hasan Shah - CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  useGSAP(
    () => {
      if (!ref.current) return;
      const q = gsap.utils.selector(ref.current);
      const subtitle = q('[data-hero-subtitle]');
      const title = q('[data-hero-title]');
      const ctas = q('[data-hero-cta]');
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(subtitle, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.45 })
        .fromTo(title, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.15')
        .fromTo(
          ctas,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.08,
            clearProps: 'opacity,transform',
          },
          '-=0.2',
        );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="home" className="pt-6 lg:pt-10 lg:min-h-[calc(100vh_-_12rem)] lg:flex lg:flex-col lg:justify-center">
      <div
        data-hero-subtitle
        className="bx-animate-in-up inline-flex h-[3rem] items-center gap-2 rounded-bx-s border border-stroke-elements bg-base px-[1.2rem] text-[1.2rem] font-bold leading-[3.1rem] text-text-bright w-fit"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        <span>Let's meet!</span>
      </div>

      <h1
        data-hero-title
        className="bx-animate-in-up mt-6 max-w-[1000px] bg-gradient-to-tr from-text-accent to-text-secondary bg-clip-text text-[44px] font-bold leading-[0.90] text-transparent sm:text-[60px] lg:text-[80px]"
      >
        I'm Zayahan <br /> Hasan Shah
        <br />
        Software Engineer <br /> &
        Problem <br /> Solver.
      </h1>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          data-hero-cta
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-full"
        >
          My Works
        </Button>
        <Button
          data-hero-cta
          variant="ghost"
          className="rounded-full text-text-muted hover:text-text-bright"
          onClick={onDownloadCv}
        >
          Download CV
        </Button>
      </div>

      <div className="mt-14 h-px w-full bg-stroke-elements lg:mt-20" />
    </section>
  );
}
