export default function InfoCard({
  icon,
  title,
  subtitle,
  delay = 0,
}) {
  return (
    <div
      style={{ "--animation-delay": `${delay}s` }}
      className="
        flex items-center gap-3
        rounded-2xl
        border border-slate-200
        bg-white
        p-4
        shadow-lg
        sm:gap-4
        sm:p-5
        animate-fade-up
        transition-transform
        duration-300
        hover:-translate-y-1.5
        hover:scale-[1.03]
      "
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#081A33] text-xl text-white sm:h-14 sm:w-14 sm:text-2xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-[#081A33]">
          {title}
        </h4>

        <p className="text-sm text-slate-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}