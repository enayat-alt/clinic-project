
import { Link } from "react-router-dom";
import { useState } from "react";

function AnimatedLogo() {
  return (
    <div className="flex items-center gap-2">
      {/* Caduceus SVG */}
      <svg
        style={{
          width: 32,
          height: 44,
          flexShrink: 0,
          animation: "op-slideIn 0.8s ease both, op-shimmer 3s ease 1.5s infinite",
        }}
        viewBox="0 0 52 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="26" y1="4" x2="26" y2="70" stroke="#c8922a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M26 18 Q40 22 38 30 Q36 38 26 38 Q16 38 14 46 Q12 54 26 58" stroke="#1a3a6b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M26 18 Q12 22 14 30 Q16 38 26 38 Q36 38 38 46 Q40 54 26 58" stroke="#1a3a6b" strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="26" cy="6" rx="5" ry="5" fill="#c8922a" />
        <path d="M22 3 Q26 0 30 3" stroke="#c8922a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M19 4 L16 8 M33 4 L36 8" stroke="#c8922a" strokeWidth="1.3" strokeLinecap="round" />
      </svg>

      {/* Brand block */}
      <div className="flex flex-col items-start gap-0.5">
        {/* Name row */}
        <div className="flex items-center leading-none">
          {/* Emblem circle (replaces "O") */}
          <div
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              border: "2px solid #c8922a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 2,
              flexShrink: 0,
              opacity: 0,
              animation: "op-popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.18s forwards",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 30 30" fill="none">
              <circle cx="15" cy="15" r="13" stroke="#c8922a" strokeWidth="1.5" />
              <circle cx="15" cy="15" r="4" fill="#c8922a" opacity="0.7" />
              <path d="M15 2 L15 28 M2 15 L28 15 M5.5 5.5 L24.5 24.5 M24.5 5.5 L5.5 24.5" stroke="#c8922a" strokeWidth="0.8" opacity="0.4" />
            </svg>
          </div>

          {/* Letters: DISHA */}
          {["D", "I", "S", "H", "A"].map((letter, i) => (
            <span
              key={letter}
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 700,
                fontSize: 28,
                color: i === 0 ? "#c8922a" : "#1a3a6b",
                display: "inline-block",
                opacity: 0,
                transform: "translateY(16px) scale(0.7)",
                animation: `op-letterDrop 0.6s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + i * 0.1}s forwards`,
              }}
            >
              {letter}
            </span>
          ))}

          <sup
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 9,
              color: "#999",
              marginLeft: 2,
              opacity: 0,
              animation: "op-fadeIn 0.5s ease 1.2s forwards",
            }}
          >
            ™
          </sup>
        </div>

        {/* Gold bar */}
        <div
          style={{
            height: 1.5,
            width: 0,
            background: "linear-gradient(90deg, #c8922a, #1a3a6b)",
            borderRadius: 1,
            animation: "op-growBar 0.7s ease 1.1s forwards",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            fontSize: 8,
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#1a3a6b",
            opacity: 0,
            transform: "scaleX(0.4)",
            transformOrigin: "left center",
            animation: "op-stretchIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.85s forwards",
            paddingLeft: 1,
          }}
        >
          Polyclinic
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Montserrat:wght@400;600&display=swap');
        @keyframes op-letterDrop {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes op-popIn {
          to { opacity: 1; }
        }
        @keyframes op-stretchIn {
          to { opacity: 1; transform: scaleX(1); }
        }
        @keyframes op-fadeIn {
          to { opacity: 1; }
        }
        @keyframes op-growBar {
          to { width: 100%; }
        }
        @keyframes op-slideIn {
          from { opacity: 0; transform: translateX(-12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes op-shimmer {
          0%   { filter: brightness(1); }
          50%  { filter: brightness(1.25) drop-shadow(0 0 4px #c8922a66); }
          100% { filter: brightness(1); }
        }
      `}</style>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navbar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <AnimatedLogo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            <Link to="/" className="hover:text-[#1a504c] transition">Home</Link>
            <Link to="/about" className="hover:text-[#1a504c] transition">About Us</Link>
            <Link to="/departments" className="hover:text-[#1a504c] transition">Departments</Link>
            <Link to="/tests-services" className="hover:text-[#1a504c] transition">Lab Tests</Link>
            <Link to="/learning" className="hover:text-[#1a504c] transition">Learning</Link>
            <Link to="/contact" className="hover:text-[#1a504c] transition">Contact</Link>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/appointment"
              className="bg-[#1a504c] text-white px-4 py-2 rounded-lg hover:bg-black transition"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-[#1a504c]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 mb-4 bg-[#1a504c] text-white rounded-2xl shadow-xl p-5 flex flex-col gap-4">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-200">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-green-200">About Us</Link>
            <Link to="/departments" onClick={() => setIsOpen(false)} className="hover:text-green-200">Departments</Link>
            <Link to="/consultation" onClick={() => setIsOpen(false)} className="hover:text-green-200">Lab Test</Link>
            <Link to="/tests-services" onClick={() => setIsOpen(false)} className="hover:text-green-200">Tests & Services</Link>
            <Link to="/learning" onClick={() => setIsOpen(false)} className="hover:text-green-200">Learning</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-green-200">Contact</Link>

            <div className="border-t border-white/20 pt-4 flex flex-col gap-3">
              <Link
                to="/appointment"
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#1a504c] text-center py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

