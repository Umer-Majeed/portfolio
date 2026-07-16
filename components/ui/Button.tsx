interface ButtonProps {
  children: React.ReactNode;

  href?: string;

  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_35px_rgba(0,245,255,.35)]"
      : "border border-gray-700 text-white hover:border-cyan-400 hover:text-cyan-400";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={`${classes}
        inline-flex
        items-center
        justify-center
        rounded-2xl
        px-8
        py-4
        font-semibold
        transition-all
        duration-300`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${classes}
      inline-flex
      items-center
      justify-center
      rounded-2xl
      px-8
      py-4
      font-semibold
      transition-all
      duration-300`}
    >
      {children}
    </button>
  );
}