import { useRef } from 'react';

import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../utils/gsap';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const ITEMS = [
  {
    company: 'Teknoloje Solutions, Karachi',
    title: 'Software Engineer',
    dates: 'July 2025 — Present',
    bullets: [
      'Implemented secure authentication, permission-based screens, and push notifications to deliver timely alerts.',
      'Integrated hardware components with the app using Bluetooth connectivity for seamless communication.',
      'Implemented cache handling, real-time chat with notifications, and prevention of screenshots.',
      'Delivered secure authentication flows (fingerprint/biometrics) and permission-based experiences.',
    ],
  },
  {
    company: 'Teknoloje Solutions, Karachi',
    title: 'Software Engineer Intern',
    dates: 'April 2025 — July 2025',
    bullets: [
      'Built clean, maintainable Dart code from scratch following best practices and Git version control.',
      'Optimized app performance for low-connectivity environments.',
      'Debugged and resolved UI/UX issues to improve app usability and visual consistency.',
    ],
  },
] as const;

export function Experience() {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const q = gsap.utils.selector(ref.current);
      const line = q('[data-timeline-line]');
      const items = q('[data-timeline-item]');

      gsap.set(line, { scaleY: 0, transformOrigin: 'top' });
      gsap.set(items, { opacity: 0, y: 16 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(line, { scaleY: 1, duration: 0.9, ease: 'power2.out' }).to(
        items,
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
          stagger: 0.12,
        },
        '-=0.5',
      );
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="experience" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Experience" title="Professional experience" />
      </div>

      <div className="relative">
        <div
          data-timeline-line
          className="absolute left-[14px] top-2 h-full w-px bg-stroke-elements"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {ITEMS.map((item) => (
            <div key={item.company} data-timeline-item className="bx-animate-in-up relative pl-12">
              <div
                className="absolute left-2 top-4 h-7 w-7 rounded-full border border-stroke-elements bg-white/60"
                aria-hidden="true"
              />

              <Card className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <p className="text-[16px] font-extrabold text-text-bright">{item.title}</p>
                    <p className="mt-1 text-[13px] font-semibold text-text-muted">{item.company}</p>
                  </div>
                  <p className="text-[12px] font-semibold text-text-placeholder">{item.dates}</p>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-text-muted">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
