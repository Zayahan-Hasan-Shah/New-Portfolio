import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import cvPdf from '../../assets/resume/Zayahan Hasan Shah - CV.pdf';

export function About() {
  const onDownloadCv = () => {
    const a = document.createElement('a');
    a.href = cvPdf;
    a.target = '_blank';
    a.rel = 'noreferrer';
    a.download = 'Zayahan Hasan Shah - CV.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section id="about" className="bx-section">
      <div className="bx-animate-in-up">
        <SectionTitle eyebrow="About Me" title="Know me" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
        <Card className="bx-animate-in-up p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-bx-m border border-stroke-elements bg-white/25 p-10 text-center">
              <p className="text-[50px] font-bold leading-none text-text-accent">32+</p>
              <p className="mt-1 text-[26px] font-semibold text-text-muted">Happy clients</p>
            </div>
            <div className="rounded-bx-m border border-stroke-elements bg-white/25 p-5 text-center">
              <p className="text-[50px] font-bold leading-none text-text-accent">2+</p>
              <p className="mt-1 text-[26px] font-semibold text-text-muted">Years of experience</p>
            </div>
            <div className="rounded-bx-m border border-stroke-elements bg-white/25 p-5 text-center">
              <p className="text-[50px] font-bold leading-none text-text-accent">75+</p>
              <p className="mt-1 text-[26px] font-semibold text-text-muted">Projects done</p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-[1fr_340px]">
            <p className="text-[18px] leading-relaxed text-text-muted">
              I design and build digital products with a focus on clarity, delightful interaction, and strong
              fundamentals. My approach blends high craft UI with engineering discipline, ensuring every screen
              scales across devices and stays accessible.
              <br />
              <br />
              Whether it’s a marketing site with high-motion storytelling or a product dashboard that needs
              consistency, I make the experience feel effortless.
            </p>

            <div className="space-y-4 space-x-3 text-[18px]">
              <p className="pt-2 text-text-muted">Name</p>
              <p className="font-bold text-text-bright">Zayahan Hasan Shah</p>
              <p className="pt-2 text-text-muted">Phone</p>
              <p className="font-bold text-text-bright">+9233 276 99137</p>
              <p className="pt-2 text-text-muted">Email</p>
              <p className="font-bold text-text-bright">zayahanshah.18@gmail.com</p>
              <p className="pt-2 text-text-muted">Location</p>
              <p className="font-bold text-text-bright">Karachi, Pakistan</p>
            </div>
          </div>

          <div className="mt-6">
            <Button className="rounded-full" onClick={onDownloadCv}>
              Download CV
            </Button>
          </div>
        </Card>

        <Card className="bx-animate-in-up p-6">
          <p className="text-[20px] font-extrabold text-text-bright">What I do</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] text-text-muted">
            <li>Cross-platform mobile apps with Flutter</li>
            <li>Android development with Kotlin</li>
            <li>Modern web apps with React + TypeScript</li>
            <li>Backend APIs with Node.js and database integration (MySQL, MSSQL, MongoDB)</li>
          </ul>
        </Card>
      </div>
    </section>
  );
}
