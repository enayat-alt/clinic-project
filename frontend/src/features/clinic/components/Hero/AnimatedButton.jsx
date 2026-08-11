import { ArrowRight } from "lucide-react";

export default function AnimatedButton({
  children,
  icon = true,
  primary = true,
  className = "",
  ...props
}) {
  return (
    <button
      className={`group relative w-full overflow-hidden rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-[0.97] sm:w-auto sm:px-8 sm:py-4 sm:text-base ${
        primary
          ? "bg-gradient-to-r from-[#0F4C81] to-[#38BDF8] text-white shadow-lg"
          : "border border-white/20 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
      } ${className}`}
      {...props}
    >
      {/* Shine */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />

      <span className="relative flex items-center justify-center gap-3">
        {children}

        {icon && (
          <ArrowRight
            className="
              h-4 w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        )}
      </span>
    </button>
  );
}