import { Link } from "react-router-dom";
import { CalendarCheck } from "lucide-react";

export default function HeaderBtn() {
  return (
    <div className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]">
      <Link
        to="/appointment"
        className="
          group
          relative
          inline-flex
          items-center
          gap-2
          overflow-hidden
          rounded-full
          bg-gradient-to-r
          from-[#081A33]
          to-[#0F4C81]
          px-4
          py-2
          text-[13px]
          font-normal
          tracking-tight
          text-white
          shadow-md
          transition-shadow
          duration-300
          hover:shadow-blue-500/20
        "
      >
        {/* Shine Effect */}
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

        <CalendarCheck className="relative z-10 h-3.5 w-3.5" />

        <span className="relative z-10 whitespace-nowrap">
          Book Appointment
        </span>
      </Link>
    </div>
  );
}