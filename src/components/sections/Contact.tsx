import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { useMemo, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const maxLen = 500;
  const count = message.length;
  const remaining = maxLen - count;

  const canSubmit = useMemo(() => {
    return name.trim().length > 0 && email.trim().length > 0 && message.trim().length > 0;
  }, [email, message, name]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!canSubmit) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject,
          time: new Date().toLocaleString(),
          message,
        },
        { publicKey },
      );

      setStatus('sent');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (err: unknown) {
      let details = '';
      if (typeof err === 'object' && err && 'status' in err && 'text' in err) {
        const e = err as { status?: number; text?: string };
        details = `${e.status ?? ''}${e.text ? ` - ${e.text}` : ''}`.trim();
      }
      // eslint-disable-next-line no-console
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bx-section">
      <SectionTitle eyebrow="Contact" title="Let's Connect!" />

      <div className="mb-[3rem]">
        <h4>Available for freelance work, personal projects, contract, or full-time opportunities.</h4>
      </div>

      <Card className="p-[3rem] 2xl:p-[5rem]">
        <form className="grid gap-[3rem]" onSubmit={onSubmit}>
          <div className="grid gap-[3rem] md:grid-cols-2">
            <label className="grid gap-[1rem] text-[1.5rem] font-semibold text-text-muted">
              Your Name*
              <input
                required
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b-2 border-stroke-elements bg-transparent px-[0.4rem] py-[1.4rem] text-[2rem] font-bold text-text-bright outline-none placeholder:text-text-placeholder focus:border-accent"
                placeholder=""
              />
            </label>
            <label className="grid gap-[1rem] text-[1.5rem] font-semibold text-text-muted">
              Subject/Purpose
              <input
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border-b-2 border-stroke-elements bg-transparent px-[0.4rem] py-[1.4rem] text-[2rem] font-bold text-text-bright outline-none placeholder:text-text-placeholder focus:border-accent"
                placeholder=""
              />
            </label>
            <label className="grid gap-[1rem] text-[1.5rem] font-semibold text-text-muted">
              Email Address*
              <input
                type="email"
                required
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b-2 border-stroke-elements bg-transparent px-[0.4rem] py-[1.4rem] text-[2rem] font-bold text-text-bright outline-none placeholder:text-text-placeholder focus:border-accent"
                placeholder=""
              />
            </label>
            {/* <label className="grid gap-[1rem] text-[1.5rem] font-semibold text-text-muted">
              Phone Number*
              <input
                required
                className="w-full border-b-2 border-stroke-elements bg-transparent px-[0.4rem] py-[1.4rem] text-[2rem] font-bold text-text-bright outline-none placeholder:text-text-placeholder focus:border-accent"
                placeholder=""
              />
            </label> */}
          </div>

          <label className="grid gap-[1rem] text-[1.5rem] font-semibold text-text-muted">
            Description*
            <textarea
              required
              rows={6}
              name="message"
              maxLength={maxLen}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full resize-none border-b-2 border-stroke-elements bg-transparent px-[0.4rem] py-[1.4rem] text-[2rem] font-bold text-text-bright outline-none placeholder:text-text-placeholder focus:border-accent"
            />
            <p className="text-[1.2rem] text-text-placeholder">
              {count} / {maxLen}
              {remaining <= 20 ? ` (remaining ${Math.max(0, remaining)})` : ''}
            </p>
          </label>

          <div className="bx-animate-in-up">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex h-[5rem] items-center justify-center rounded-bx-m bg-accent-gradient px-[2rem] text-[1.6rem] font-bold leading-[5rem] text-white transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {status === 'sent' ? (
            <p className="text-[1.3rem] font-semibold text-text-accent">Message sent successfully.</p>
          ) : null}
          {status === 'error' ? (
            <p className="text-[1.3rem] font-semibold text-text-muted">
              Failed to send, please try again
              {/* Failed to send. {errorMessage || 'Please try again.'} */}
            </p>
          ) : null}
        </form>
      </Card>
    </section>
  );
}
