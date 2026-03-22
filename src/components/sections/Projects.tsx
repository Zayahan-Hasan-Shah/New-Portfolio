import { useCallback, useEffect, useMemo, useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';

import dailyDiaryImg from '../../assets/images/daily daires/2.png';
import ciclImg from '../../assets/images/cicl app/1.png';
import posCrmImg from '../../assets/images/pos with crm/1.jpg';
import knoviImg from '../../assets/images/knovi/1.png';
import communicationImg from '../../assets/images/communication app/1.png';
import lawyerImg from '../../assets/images/lawyer app/1.png';
import studyImg from '../../assets/images/study app/Home.jpg';
import managementImg from '../../assets/images/management app/1.png';

type Project = {
  title: string;
  tags: string[];
  desc: string;
  image?: string;
};

const CRM_AI_IMAGE =
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80';

const PROJECTS: Project[] = [
  {
    title: 'Daily Diary',
    image: dailyDiaryImg,
    tags: ['Flutter', 'Firebase'],
    desc:
      'Cross-platform mood + journaling app with voice notes, video entries, and daily insights synced via Firebase.',

  },
  {
    title: 'CICL App',
    image: ciclImg,
    tags: ['Flutter', 'Biometrics', 'Realtime'],
    desc:
      'Business-critical app with secure fingerprint authentication, real-time claim tracking, and event history with clean UX.',

  },
  {
    title: 'POS with CRM',
    image: posCrmImg,
    tags: ['Flutter', 'FastAPI', 'FYP'],
    desc:
      'Point-of-sale and CRM system with inventory, suppliers, purchases, and customer workflows powered by a FastAPI backend.',

  },
  {
    title: 'Knovi',
    image: knoviImg,
    tags: ['Next.js', 'PostgreSQL'],
    desc:
      'Knovi is a comprehensive knowledge management platform that helps schools to manage their knowledge base efficiently, with features like document management, user management, and role-based access control. For students, it provides a centralized platform to access learning materials, track their progress, and collaborate with peers. For teachers, it provides a platform to create and manage learning materials, track student progress, and collaborate with other teachers.',

  },
  {
    title: 'Communication App',
    image: communicationImg,
    tags: ['Flutter', 'NodeJs', 'Socket.io'],
    desc:
      'Real-time communication app with text capabilities using Socket.io.',

  },
  {
    title: 'Lawyer App',
    image: lawyerImg,
    tags: ['Flutter', 'CSharp', 'MSSQL'],
    desc:
      'Client and case management with secure access, streamlined workflows with real time communication offering text and video calls, and robust data handling using MSSQL + C# services.',

  },
  {
    title: 'Study Management App',
    image: studyImg,
    tags: ['Kotlin'],
    desc:
      'Mobile study management app built with Kotlin for Android, featuring task tracking, progress monitoring, and data synchronization.',

  },
  {
    title: 'Management System',
    image: managementImg,
    tags: ['React', 'CSharp', 'MSSQL'],
    desc:
      'Web-based management system built with React + C# and MSSQL focused on clarity, speed, and maintainable architecture.',

  },
  {
    title: 'CRM with AI',
    image: CRM_AI_IMAGE,
    tags: ['React', 'Node.js', 'AI', 'MongoDB'],
    desc:
      'Web-based CRM system with AI-powered insights, automated workflows, and real-time analytics.',
    // ctaLabel: 'Project Page',
    // ctaHref: '#',
  },
];

export function Projects() {
  const items = useMemo(() => [...PROJECTS], []);
  const [index, setIndex] = useState(0);
  const active = items[index];
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('landscape');

  useEffect(() => {
    setOrientation('landscape');
  }, [active.image]);

  const onPrev = useCallback(() => {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const onNext = useCallback(() => {
    setIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  return (
    <section id="portfolio" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="Portfolio" title="My featured projects" />
      </div>

      <Card className="bx-animate-in-up p-[3rem] 2xl:p-[5rem]">
        <div className="grid gap-8 md:grid-cols-[1fr_360px] md:items-start">
          <div className="min-w-0">
            <p className="text-[3.2rem] font-extrabold leading-none text-text-bright">{active.title}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-black/85 px-4 py-2 text-[1.4rem] font-semibold text-white"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-10 max-w-[92rem] text-[1.8rem] leading-relaxed text-text-muted">{active.desc}</p>
          </div>

          {active.image ? (
            <div className="w-full overflow-hidden rounded-bx-l border border-stroke-elements bg-white/10">
              <div
                className={`relative w-full p-4 ${
                  orientation === 'portrait' ? 'aspect-[9/16] md:aspect-[3/4]' : 'aspect-[16/10] md:aspect-[4/3]'
                }`}
              >
                <img
                  src={active.image}
                  alt={`${active.title} preview`}
                  loading="lazy"
                  onLoad={(e) => {
                    const img = e.currentTarget;
                    if (img.naturalHeight > img.naturalWidth) setOrientation('portrait');
                    else setOrientation('landscape');
                  }}
                  className="h-full w-full rounded-bx-m object-contain"
                />
              </div>
            </div>
          ) : (
            <div
              className="h-[8.4rem] w-[8.4rem] rounded-full border border-stroke-elements bg-white/35"
              aria-hidden="true"
            />
          )}
        </div>

        {/* <a
          href={active.ctaHref}
          className="mt-10 inline-flex items-center gap-2 text-[1.6rem] font-extrabold text-text-bright"
        >
          {active.ctaLabel}
          <span aria-hidden="true">→</span>
        </a> */}
      </Card>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full border border-stroke-controls bg-transparent text-text-bright transition hover:bg-black/5"
          aria-label="Previous project"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-full border border-stroke-controls bg-transparent text-text-bright transition hover:bg-black/5"
          aria-label="Next project"
        >
          ›
        </button>
      </div>
    </section>
  );
}
