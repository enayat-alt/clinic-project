export default function FloatingCard({
  icon,
  title,
  subtitle,
  className = "",
  delay = 0,
}) {
  return (
    <div
      className={`floating-card absolute hidden lg:block ${className}`}
      style={{ "--animation-delay": `${delay}s` }}
    >
      <div className="floating-card-inner w-60 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-white/20
              text-2xl
              text-cyan-300
            "
          >
            {icon}
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-lg font-semibold text-white">
              {title}
            </h4>

            <p className="mt-1 text-sm leading-5 text-slate-300">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}