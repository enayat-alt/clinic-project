import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTimes,
  FaCalendarCheck,
  FaChevronRight,
} from "react-icons/fa";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Doctor", path: "/doctor" },
  { name: "Departments", path: "/departments" },
  { name: "Tests & Services", path: "/tests-services" },
];


export default function MobileNav({
  open,
  setOpen,
}) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "100%",
          }}
          transition={{
            duration: 0.35,
          }}
          className="
          fixed
          inset-0
          z-[999]
          bg-[#081A33]
          lg:hidden
          "
        >

          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">

            <h2 className="text-2xl font-bold text-white">
              Odisha Polyclinic
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              "
            >
              <FaTimes />
            </button>

          </div>

          {/* Navigation */}

          <div className="px-6 py-8 space-y-2">

            {navItems.map((item) => (

              <Link
                key={item.title}
                to={item.path}
                onClick={() => setOpen(false)}
                className="
                group
                flex
                items-center
                justify-between
                rounded-2xl
                px-5
                py-4
                text-lg
                font-medium
                text-white
                transition
                hover:bg-white/10
                "
              >

                {item.title}

                <FaChevronRight
                  className="
                  opacity-0
                  transition
                  group-hover:translate-x-2
                  group-hover:opacity-100
                  "
                />

              </Link>

            ))}

          </div>

          {/* Bottom */}

          <div className="absolute bottom-8 left-6 right-6">

            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="
              flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              py-4
              text-lg
              font-semibold
              text-white
              shadow-xl
              "
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