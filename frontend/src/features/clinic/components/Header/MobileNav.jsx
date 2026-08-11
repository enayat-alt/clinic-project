import { Link } from "react-router-dom";
import {
  X,
  User,
  Home,
  Grid2X2,
  Info,
  UserCheck,
  BookOpen,
  Activity,
  PhoneCall,
  ChevronRight,
  Calendar,
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  {
    name: "Departments",
    path: "/departments",
    icon: <Grid2X2 className="h-5 w-5" />,
  },
  {
    name: "About",
    path: "/about",
    icon: <Info className="h-5 w-5" />,
  },
  {
    name: "Doctor",
    path: "/doctor",
    icon: <UserCheck className="h-5 w-5" />,
  },
  {
    name: "Learning",
    path: "/Learning",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    name: "Tests & Services",
    path: "/tests-services",
    icon: <Activity className="h-5 w-5" />,
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: <PhoneCall className="h-5 w-5" />,
  },
];

export default function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex
        font-sans antialiased
        min-[1025px]:hidden
        ${open ? "visible" : "invisible pointer-events-none"}
      `}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/50 backdrop-blur-xs
          transition-opacity duration-250
          ${open ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Side Drawer */}
      <div
        className={`
          relative z-10 flex h-full w-[82%] max-w-xs flex-col
          bg-white shadow-2xl
          transform transition-transform duration-250 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Top Header */}
        <div className="relative bg-[#2a687d] px-5 py-6 text-white">
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
            type="button"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3.5 pt-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
              <User className="h-6 w-6" />
            </div>

            <div>
              <h3 className="text-base font-medium tracking-tight text-white">
                Odisha Polyclinic
              </h3>

              <p className="text-xs font-normal text-white/80">
                Healthcare Services
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto bg-white py-1">
          {navItems.map((item, index) => (
            <div key={item.name}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between px-5 py-3.5 text-sm font-medium tracking-tight text-slate-800 transition hover:bg-slate-50"
              >
                <div className="flex items-center gap-4">
                  <span className="text-slate-600 transition-colors duration-200 group-hover:text-[#2a687d]">
                    {item.icon}
                  </span>

                  <span>{item.name}</span>
                </div>

                <ChevronRight className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-600" />
              </Link>

              {index < navItems.length - 1 && (
                <div className="border-t border-slate-100" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-slate-100 bg-slate-50 p-4">
          <Link
            to="/appointment"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2.5 rounded-xl bg-[#2a687d] py-3.5 text-sm font-medium tracking-tight text-white shadow-sm transition hover:bg-[#225465] active:scale-[0.98]"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}