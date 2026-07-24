
import { Link } from "react-router-dom";

export default function Logo({ scrolled }) {
  return (
    <Link to="/" className="flex items-center gap-3 select-none group py-1">
      {/* Small Side Medical Image Logo (Left Side, Slightly Larger) */}
      <div className="flex-shrink-0">
        <img
          src="/medicallogo.webp"
          alt="Odisha Polyclinic Medical Logo"
          className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>


      <div className="flex flex-col leading-none">
        
        {/* Row 1: ODISHA (Big Main Title) + TM Badge */}
        <div className="flex items-start">
          <span
            className={`font-serif text-[20px] font-black tracking-[0.16em] uppercase transition-colors duration-300 ${
              scrolled ? "text-[#1A3B5D]" : "text-[#E5C378]"
            }`}
          >
            ODISHA
          </span>

         
          <span
            className={`ml-1 mt-0.5 flex items-center justify-center w-2.5 h-2.5 rounded-full border border-current text-[4.5px] font-sans font-extrabold leading-none transition-colors duration-300 ${
              scrolled ? "text-[#1A3B5D]" : "text-[#E5C378]"
            }`}
          >
            TM
          </span>
        </div>

       
        <span
          className={`font-serif text-[11px] font-bold tracking-[0.22em] uppercase mt-0.5 transition-colors duration-300 ${
            scrolled ? "text-[#1A3B5D]" : "text-[#E5C378]"
          }`}
        >
          POLYCLINIC
        </span>

    
        <span
          className={`text-[6.5px] font-sans font-bold uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
            scrolled ? "text-[#1A3B5D]/80" : "text-[#F2DA9B]"
          }`}
        >
          BHUBANESWAR'S BEST HEALTH CLINIC
        </span>

      </div>
    </Link>
  );
}