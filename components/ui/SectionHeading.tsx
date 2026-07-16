interface Props {
  title: string;

  subtitle: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="text-center mb-20">

      <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">
        {subtitle}
      </p>

      <h2 className="text-5xl md:text-6xl font-bold mt-5">
        {title}
      </h2>

    </div>
  );
}