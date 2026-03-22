import { useEffect, useMemo, useState } from 'react';

type ScrollSpyOptions = {
  sectionIds: readonly string[];
  offsetPx?: number;
};

export function useScrollSpy({ sectionIds, offsetPx = 140 }: ScrollSpyOptions) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  const ids = useMemo(() => [...sectionIds], [sectionIds]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return undefined;

    let raf = 0;

    const compute = () => {
      const y = window.scrollY + offsetPx;

      let nextId = elements[0]?.id ?? '';
      for (const el of elements) {
        if (el.offsetTop <= y) nextId = el.id;
      }

      setActiveId((prev) => (prev === nextId ? prev : nextId));
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids, offsetPx]);

  return activeId;
}
