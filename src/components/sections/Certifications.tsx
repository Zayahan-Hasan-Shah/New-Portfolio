import { Card } from '../ui/Card';
import { SectionTitle } from '../ui/SectionTitle';

import certIntroMl from '../../assets/certificates/ZAYAHAN HASAN SHAH - Intro to Machine Learning.png';
import certPandas from '../../assets/certificates/ZAYAHAN HASAN SHAH - Pandas.png';

const CERTIFICATES = [
  {
    title: 'Intro to Machine Learning',
    image: certIntroMl,
  },
  {
    title: 'Pandas',
    image: certPandas,
  },
] as const;

export function Certifications() {
  return (
    <section id="certifications" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Certifications" title="Certificates & Credentials" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {CERTIFICATES.map((item) => (
          <Card
            key={item.title}
            className="bx-animate-in-up group overflow-hidden p-0 transition hover:-translate-y-0.5 hover:bg-white/40"
          >
            <a
              href={item.image}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open certificate: ${item.title}`}
              className="block"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-base/80 via-base/5 to-transparent opacity-90" />
              </div>

              <div className="flex items-center justify-between gap-3 px-5 py-4">
                <p className="text-[14px] font-extrabold text-text-bright">{item.title}</p>
                <span className="text-[12px] font-semibold text-text-muted">View</span>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
}
