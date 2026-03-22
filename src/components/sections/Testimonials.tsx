import { useCallback, useMemo, useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const TESTIMONIALS = [
  {
    quote:
      'Zayahan delivers CICL App for our employees to track their reimbursement requests and approvals along with Claims Management. And deployed it on PlayStore and AppStore.',
    name: 'Abdul Rasheed',
    role: 'VC of CICL',
    rating: 5,
  },
  {
    quote:
      'Helps alot in Lawyer App to make it easier for lawyers to manage their cases and clients. Along client portal for better communication. and Student portal for better communication, jobs and short courses.',
    name: 'Basit Khan',
    role: 'Advocate',
    rating: 4.5,
  },
  {
    quote:
      'Zayahan consistently delivers clean, scalable front-end code with a strong focus on performance and accessibility. The UI polish is always top tier.',
    name: 'Ayesha Khan',
    role: 'Product Designer',
    rating: 4.5,
    linkLabel: 'Project Page',
    linkHref: '#portfolio',
  },
  {
    quote:
      'Fast execution, great communication, and attention to detail. He handled complex interactions and animations without sacrificing maintainability.',
    name: 'Usman Ali',
    role: 'Engineering Manager',
    rating: 5,
    linkLabel: 'Project Page',
    linkHref: '#portfolio',
  },
  {
    quote:
      'Our landing pages shipped on time and looked pixel-perfect across devices. The final result was smooth, modern, and conversion-friendly.',
    name: 'Sara Malik',
    role: 'Marketing Lead',
    rating: 5,
    linkLabel: 'Project Page',
    linkHref: '#portfolio',
  },
] as const;

function StarRow({ count }: { count: number }) {
  return (
    <div className="mt-3 flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={
            'inline-block text-[1.4rem] leading-none ' +
            (i < count ? 'text-secondary' : 'text-stroke-controls/60')
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const items = useMemo(() => [...TESTIMONIALS], []);
  const [index, setIndex] = useState(0);
  const active = items[index];

  const onPrev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const onNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  return (
    <section id="testimonials" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Testimonials" title="What people say" />
      </div>

      <Card className="bx-animate-in-up p-[3rem] 2xl:p-[5rem]">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-6">
           

            <div>
              <p className="text-[2.6rem] font-extrabold leading-none text-text-bright">{active.name}</p>
              <p className="mt-2 text-[1.4rem] font-semibold text-text-muted">{active.role}</p>
              <StarRow count={active.rating} />
            </div>
          </div>
        </div>

        <p className="mt-10 max-w-[92rem] text-[1.8rem] leading-relaxed text-text-muted">{active.quote}</p>

        {/* <a
          href={active.linkHref}
          className="mt-10 inline-flex items-center gap-2 text-[1.6rem] font-extrabold text-text-bright"
        >
          {active.linkLabel}
          <span aria-hidden="true">→</span>
        </a> */}
      </Card>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full border border-stroke-controls bg-transparent text-text-bright transition hover:bg-black/5"
          aria-label="Previous testimonial"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full border border-stroke-controls bg-transparent text-text-bright transition hover:bg-black/5"
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>
    </section>
  );
}
