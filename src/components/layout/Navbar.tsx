import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NAV_ITEMS } from '../../utils/constants';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  className?: string;
};

export function Navbar({ className = '' }: Props) {
  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);
  const activeId = useScrollSpy({ sectionIds, offsetPx: 160 });
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const onNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    const offset = isDesktop ? 130 : 90;
    const top = window.scrollY + el.getBoundingClientRect().top - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        className={
          `fixed left-1/2 bottom-[1.5rem] z-50 h-[5.6rem] w-[calc(100%_-_2.4rem)] max-w-[560px] -translate-x-1/2 rounded-full bg-black/5 backdrop-blur-md ` +
          `md:bottom-[3rem] md:max-w-[640px] lg:top-[3rem] lg:bottom-auto lg:left-auto lg:right-0 lg:h-[5rem] lg:w-[calc(100%_-_330px)] lg:max-w-none lg:translate-x-0 lg:bg-transparent lg:backdrop-blur-0 ` +
          `xl:w-[calc(100%_-_360px)] 2xl:top-[5rem] 2xl:w-[calc(100%_-_480px)] ` +
          className
        }
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between gap-3 px-2 lg:px-0"
        >
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-stroke-controls/40 bg-black/5 text-text-bright transition hover:bg-black/10"
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>

          <div className="hidden items-center justify-center rounded-full border border-stroke-controls/40 bg-black/5 px-2 py-2 backdrop-blur-md lg:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavClick(item.id)}
                  className={
                    `relative h-[5rem] rounded-bx-m px-[2rem] text-[1.6rem] font-bold leading-[5rem] transition ` +
                    (isActive
                      ? 'border border-stroke-controls/60 bg-black/5 text-text-bright backdrop-blur-sm'
                      : 'border border-transparent text-text-muted hover:text-text-bright')
                  }
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 lg:ml-auto">
            <button
              type="button"
              onClick={toggle}
              className="inline-flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-stroke-controls/40 bg-black/5 backdrop-blur-md transition hover:bg-black/10 lg:h-[5rem] lg:w-[5rem] lg:rounded-bx-m"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('contact');
              }}
              className="inline-flex h-[4.4rem] items-center justify-center rounded-full bg-accent-gradient px-[1.6rem] text-[1.4rem] font-bold leading-[4.4rem] text-white transition hover:scale-[1.03] sm:px-[2rem] sm:text-[1.6rem] lg:h-[5rem] lg:rounded-bx-m lg:text-[1.6rem] lg:leading-[5rem]"
            >
              <span className="whitespace-nowrap">Let's Talk</span>
            </a>
          </div>
        </nav>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />

          <div className="absolute right-0 top-0 h-full w-[86vw] max-w-[360px] bg-base p-5 shadow-glass-soft">
            <div className="flex items-center justify-between">
              <p className="text-[1.6rem] font-extrabold text-text-bright">Menu</p>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-[4.4rem] w-[4.4rem] items-center justify-center rounded-full border border-stroke-controls/40 bg-black/5 text-text-bright transition hover:bg-black/10"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 grid gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      onNavClick(item.id);
                    }}
                    className={
                      `flex h-[5rem] w-full items-center justify-between rounded-bx-m border px-[1.6rem] text-[1.5rem] font-bold transition ` +
                      (isActive
                        ? 'border-stroke-controls/60 bg-black/5 text-text-bright'
                        : 'border-stroke-elements bg-transparent text-text-muted hover:text-text-bright')
                    }
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                    <span aria-hidden="true">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
