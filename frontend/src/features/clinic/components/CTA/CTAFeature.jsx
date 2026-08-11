export default function CTAFeature({ icon, title }) {
  return (
    <div
      className="
        flex items-center gap-2.5
        rounded-xl
        border border-slate-200/80
        bg-white
        p-3
        shadow-xs
        font-jakarta
        transition-transform
        duration-200
        hover:-translate-y-[3px]
        hover:scale-[1.01]
      "
    >
      {/* Icon Badge Container */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs text-[#0F4C81]">
        {icon}
      </div>

      {/* Feature Title */}
      <h4 className="text-xs font-semibold tracking-tight text-[#1E293B]">
        {title}
      </h4>
    </div>
  );
}