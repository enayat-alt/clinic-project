import { Link } from "react-router-dom";
import { FaHeartbeat } from "react-icons/fa";

export default function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center gap-3 select-none">
      {/* Logo Icon */}
      <div className="relative flex-shrink-0">
        {/* Glow */}
        <div
          className={`absolute inset-0 rounded-full blur-xl transition-colors duration-300 ${
            scrolled ? "bg-cyan-400 opacity-40" : "bg-white opacity-30"
          }`}
        />

        {/* Logo Container - Kept at exact h-12 w-12 */}
        <div
          className={`relative flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg transition-colors duration-300 ${
            scrolled
              ? "bg-gradient-to-br from-[#0F4C81] to-[#081A33]"
              : "bg-white/20 backdrop-blur-md border border-white/20"
          }`}
        >
          <FaHeartbeat className="text-xl text-white" />
        </div>
      </div>

      {/* Text Area */}
      <div className="flex flex-col justify-center leading-none">
        
        {/* Title Container - Changed to inline-flex with a tiny gap to keep TM close */}
        <div className="inline-flex items-start gap-0.5 mb-1">
          <h2
            className={`text-xl font-extrabold tracking-wide transition-colors duration-300 ${
              scrolled ? "text-[#081A33]" : "text-white"
            }`}
          >
            Odisha
          </h2>
          
          {/* Circled TM Mark - Placed tightly at the top right of the text stream */}
          <span
            className={`text-[5.5px] font-bold border rounded-full h-3 w-3 flex-shrink-0 flex items-center justify-center tracking-tighter transition-colors duration-300 mt-0.5 ${
              scrolled ? "text-[#081A33] border-[#081A33]" : "text-white/80 border-white/40"
            }`}
          >
            TM
          </span>
        </div>

        {/* Subtitle */}
        <p
          className={`text-[10px] uppercase tracking-[3px] mb-1 transition-colors duration-300 ${
            scrolled ? "text-slate-500" : "text-white/70"
          }`}
        >
          POLYCLINIC
        </p>

        {/* Tagline */}
        <span
          className={`text-[7px] tracking-tight whitespace-nowrap italic transition-colors duration-300 ${
            scrolled ? "text-slate-400" : "text-white/50"
          }`}
        >
          Bhubaneswar's Best Health Clinic
        </span>
      </div>
    </Link>
  );
}