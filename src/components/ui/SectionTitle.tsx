type Props = {
  eyebrow: string;
  title: string;
};

export function SectionTitle({ eyebrow, title }: Props) {
  return (
    <div className="mb-8">
      <div className="inline-flex h-[3.4rem] items-center gap-2 rounded-bx-s border border-stroke-elements bg-base px-[1.4rem] text-[1.3rem] font-bold leading-[3.3rem] text-text-bright">
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-5 max-w-[1000px] bg-gradient-to-tr from-text-accent to-text-secondary bg-clip-text text-[44px] font-bold leading-[0.90] text-transparent sm:text-[56px]">
        {title.split(' ').map((word, index) => (
          <span key={index} className="block">
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
}
