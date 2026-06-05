type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-[#7fa0ff]">{eyebrow}</p>
      <h2 className="text-3xl font-black uppercase leading-none text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-white/64">{copy}</p> : null}
    </div>
  );
}
