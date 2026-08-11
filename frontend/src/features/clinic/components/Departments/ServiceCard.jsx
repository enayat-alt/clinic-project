export default function ServiceCard({
  icon,
  title,
  bgColor = "bg-blue-100/70",
  textColor = "text-[#103B70]",
  circleBg = "bg-white/80",
}) {
  return (
    <div
      className={`
        group relative flex h-48 w-32 shrink-0 cursor-pointer
        flex-col justify-between overflow-hidden rounded-2xl
        p-3.5 font-jakarta shadow-xs
        transition-all duration-300
        hover:-translate-y-1 hover:scale-[1.02]
        ${bgColor}
        animate-fade-up
      `}
    >
      {/* Title */}
      <h3 className={`text-xs font-bold tracking-tight ${textColor}`}>
        {title}
      </h3>

      {/* Icon */}
      <div className="flex flex-1 items-center justify-center">
        <div
          className={`
            flex h-20 w-20 items-center justify-center
            rounded-full shadow-xs
            transition-transform duration-300
            group-hover:scale-105
            ${circleBg}
          `}
        >
          <div className={`text-2xl ${textColor}`}>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
}