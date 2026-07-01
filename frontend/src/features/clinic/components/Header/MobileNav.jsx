
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaCalendarCheck,
  FaChevronRight,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Departments", path: "/departments" },
  { name: "Tests & Services", path: "/tests-services" },
  { name: "Contact", path: "/contact" },
];

export default function MobileNav({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: "90%" }}
          animate={{ x: 0 }}
          exit={{ x: "90%" }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[999] bg-[#081A33] lg:hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <h2 className="text-xl font-bold text-white">
              Odisha Polyclinic
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Navigation */}
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10"
              >
                <span>{item.name}</span>

                <FaChevronRight className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="absolute bottom-8 left-6 right-6">
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F4C81] to-[#38BDF8] py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02]"
            >
              <FaCalendarCheck />
              Book Appointment
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}