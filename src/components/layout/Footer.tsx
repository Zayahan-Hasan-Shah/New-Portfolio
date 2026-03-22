import { SITE } from '../../utils/constants';

export function Footer() {
  return (
    <footer className="pb-12 pt-16 text-center text-[13px] text-text-muted">
      <p>
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </p>
    </footer>
  );
}
