import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const EDUCATION = [
  {
    dates: '2021 - 2024',
    title: 'Computer Science',
    school: 'University of Karachi',
    desc: 'GPA: 2.91/4.0. Coursework: DSA, DAA, OOP.',
  },
  {
    dates: '2018 — 2020',
    title: 'Pre-Engineering',
    school: 'Govt Jauhar Degree College',
    desc: 'Faculty: Pre-Engineering.',
  },
  {
    dates: '2005 — 2018',
    title: 'Science Group',
    school: 'The Educator School',
    desc: 'Science Group.',
  },
] as const;

export function Resume() {
  return (
    <section id="resume" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Resume" title="Education" />
      </div>

      <Card className="bx-animate-in-up p-6 md:p-10">
        <p className="text-[16px] leading-relaxed text-text-muted">
          Be what you would seem to be - or, if you'd like it put more simply - never imagine yourself not to be
          otherwise than what it might appear to others that what you were or might have been was not otherwise
          than what you had been would have appeared to them to be otherwise.
        </p>

        <div className=" h-[400px] flex justify-center flex-col">
          <p className="text-[24px] font-extrabold text-text-bright">My education</p>
          <div className="mt-10 space-y-5 overflow-y-auto">
            {EDUCATION.map((e) => (
              <div key={e.title} className="grid gap-4 border-t border-stroke-elements p-10 md:grid-cols-[120px_1fr_240px]">
                <p className="text-[18px] font-semibold text-text-placeholder">{e.dates}</p>
                <div>
                  <p className="text-[26px] font-bold text-text-bright">{e.school}</p>
                  <p className="mt-1 text-[14px] font-bold text-text-muted">{e.title}</p>
                </div>
                <p className="text-[14px] leading-relaxed text-text-muted">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}
