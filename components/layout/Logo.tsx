export default function Logo() {
  return (
    <a
      href="#home"
      className="
        group
        text-2xl
        font-black
        tracking-[0.18em]
        transition-transform
        duration-300
        hover:scale-105
      "
    >
      <span className="text-white">
        UMER
      </span>

      <span
        className="
          text-cyan-400
          transition-all
          duration-300
          group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,.9)]
        "
      >
        .OS
      </span>
    </a>
  );
}