import {
  Github,
  Linkedin,
  Phone,
  Mail,
} from 'lucide-react';
import { useCallback, type ReactNode } from 'react';
import avatarImg from '../../assets/Zayahan - AI.png';
import { Card } from '../ui/Card';
import { SITE } from '../../utils/constants';

function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      aria-label={label}
      className="relative z-[2] inline-flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-stroke-controls bg-base-tint text-text-bright transition hover:scale-[1.06] pointer-events-auto"
    >
      {children}
    </a>
  );
}

export function SidebarProfileCard() {

  const onNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) {
      // eslint-disable-next-line no-console
      console.warn(`[SidebarProfileCard] target not found: #${id}`);
      return;
    }

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const offset = isDesktop ? 130 : 90;

    // Prefer scrollIntoView for reliability, then correct for fixed header offset.
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      window.scrollBy({ top: -offset, behavior: 'instant' as ScrollBehavior });
    }, 250);
  }, []);
  return (
    <aside className="relative mx-auto w-full max-w-[520px] px-4 pb-16 pt-6 sm:px-6 lg:fixed lg:left-[3rem] lg:top-[3rem] lg:w-[300px] lg:max-w-none lg:px-0 lg:pb-0 lg:pt-0 xl:left-[6rem] 2xl:left-[8rem] 2xl:top-[5rem] 2xl:w-[400px]">
      <Card className="relative overflow-hidden p-[3rem] 2xl:p-[5rem]">
        <div className="flex items-center">
          <div className="">
            <p className="text-[2.8rem] font-extrabold leading-[1.06] text-text-bright">{SITE.name}</p>
            <p className="mt-[0.6rem] text-[1.5rem] font-semibold leading-none text-text-muted">{SITE.role}</p>
          </div>
        </div>

        <div className="mt-[2rem] overflow-hidden rounded-bx-l">
          <div className="avatar__image overflow-hidden rounded-bx-l">
            <img src={avatarImg} alt="Portrait" loading="eager" className="w-full object-cover" />
          </div>
        </div>

        <div className="mt-[1.6rem] space-y-[1.6rem] text-[1.5rem] leading-snug">
          <div>
            <p className="text-text-muted">Specification:</p>
            <p className="font-extrabold text-text-bright">{SITE.role}</p>
          </div>

          <div>
            <p className="text-text-muted">Based in:</p>
            <p className="font-extrabold text-text-bright">{SITE.location}</p>
          </div>
          <div>
            <p className="text-text-muted">Availablity:</p>
            <p className="font-extrabold text-text-bright">{SITE.mode}</p>
          </div>
        </div>

        <div className="mt-[2rem] flex flex-wrap gap-[1rem] ">
          <IconLink href="https://github.com/Zayahan-Hasan-Shah" label="GitHub">
            <Github size={18} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/zayahan-hasan-shah-66a85823a/" label="LinkedIn">
            <Linkedin size={18} />
          </IconLink>
          <IconLink href="tel:+923327699137" label="Phone">
            <Phone size={18} />
          </IconLink>
          <IconLink href="mailto:zayahanshah.18@gmail.com" label="Email">
            <Mail size={18} />
          </IconLink>
        </div>

        <div className="mt-[2.2rem]">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavClick('contact');
            }}
            className="inline-flex h-[4.4rem] items-center justify-center rounded-full bg-accent-gradient px-[1.6rem] text-[1.4rem] font-bold leading-[4.4rem] text-white transition hover:scale-[1.03] sm:px-[2rem] sm:text-[1.6rem] lg:h-[5rem] lg:rounded-bx-m lg:text-[1.6rem] lg:leading-[5rem]"
          >
            <span className="whitespace-nowrap">Let's Work Together</span>
          </a>
        </div>
      </Card>
    </aside>
  );
}
