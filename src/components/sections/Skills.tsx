import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

const SKILLS = [
  { label: 'Flutter', slug: 'flutter', level: 80 },
  { label: 'Kotlin', slug: 'kotlin', level: 60 },
  { label: 'JavaScript', slug: 'javascript', level: 70 },
  { label: 'TypeScript', slug: 'typescript', level: 70 },
  { label: 'Python', slug: 'python', level: 70 },
  { label: 'React', slug: 'react', level: 60 },
  { label: 'Node.js', slug: 'nodedotjs', level: 70 },
  { label: 'CSharp', slug: 'csharp', level: 60 },
  { label: 'MySQL', slug: 'mysql', level: 75 },
  { label: 'MSSQL', slug: 'microsoftsqlserver', level: 75 },
  { label: 'MongoDB', slug: 'mongodb', level: 65 },
] as const;

function SkillLogo({ slug, label }: { slug: string; label: string }) {
  const light = `https://cdn.simpleicons.org/${slug}/22232c`;
  const dark = `https://cdn.simpleicons.org/${slug}/e6ebf4`;

  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-bx-m bg-white/55">
      <img src={light} alt={label} loading="lazy" className="h-5 w-5 dark:hidden" />
      <img src={dark} alt={label} loading="lazy" className="hidden h-5 w-5 dark:block" />
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Skills" title="Languages Tools Frameworks" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {SKILLS.map(({ label, slug, level }) => (
          <Card
            key={label}
            className="bx-animate-in-up p-5 transition hover:-translate-y-0.5 hover:bg-white/40"
          >
            <div className="flex items-center gap-3">
              <SkillLogo slug={slug} label={label} />
              <div className="min-w-0">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="truncate text-[14px] font-bold text-text-bright">{label}</p>
                  <p className="shrink-0 text-[12px] font-semibold text-text-muted">{level}%</p>
                </div>

                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/25 ring-1 ring-stroke-controls">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-accent via-secondary to-accent"
                    style={{ width: `${level}%` }}
                    role="progressbar"
                    aria-label={`${label} proficiency`}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={level}
                  />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
