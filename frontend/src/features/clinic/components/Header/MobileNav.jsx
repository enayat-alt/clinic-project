
// // import { AnimatePresence, motion } from "framer-motion";
// // import { Link } from "react-router-dom";
// // import {
// //   FaTimes,
// //   FaCalendarCheck,
// //   FaChevronRight,
// // } from "react-icons/fa";

// // const navItems = [
// //   { name: "Home", path: "/" },
// //   { name: "Departments", path: "/departments" },
// //   { name: "About", path: "/about" },
// //   { name: "Doctor", path: "/doctor" },
// //   { name: "Learning", path: "/Learning" },
// //   { name: "Tests & Services", path: "/tests-services" },
// //   { name: "Contacts", path: "/contacts" },
// // ];


// // export default function MobileNav({ open, setOpen }) {
// //   return (
// //     <AnimatePresence>
// //       {open && (
// //         <motion.div
// //           initial={{ x: "100%" }}
// //           animate={{ x: 0 }}
// //           exit={{ x: "100%" }}
// //           transition={{ duration: 0.3, ease: "easeInOut" }}
// //           className="fixed inset-0 z-[9999] bg-[#081A33] overflow-y-auto flex flex-col justify-between min-[1025px]:hidden"
// //         >
// //           <div>
// //             <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
// //               <h2 className="text-xl font-bold text-white">
// //                 Odisha Polyclinic
// //               </h2>

// //               <button
// //                 onClick={() => setOpen(false)}
// //                 className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
// //                 type="button"
// //               >
// //                 <FaTimes size={20} />
// //               </button>
// //             </div>

// //             <div className="px-6 py-8 space-y-2">
// //               {navItems.map((item) => (
// //                 <Link
// //                   key={item.name}
// //                   to={item.path}
// //                   onClick={() => setOpen(false)}
// //                   className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10"
// //                 >
// //                   <span>{item.name}</span>
// //                   <FaChevronRight className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="p-6 bg-[#081A33]">
// //             <Link
// //               to="/appointment"
// //               onClick={() => setOpen(false)}
// //               className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F4C81] to-[#38BDF8] py-4 text-lg font-semibold text-white shadow-xl transition hover:scale-[1.02]"
// //             >
// //               <FaCalendarCheck />
// //               Book Appointment
// //             </Link>
// //           </div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // }


// import { AnimatePresence, motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import {
//   FaTimes,
//   FaCalendarCheck,
//   FaChevronRight,
// } from "react-icons/fa";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Departments", path: "/departments" },
//   { name: "About", path: "/about" },
//   { name: "Doctor", path: "/doctor" },
//   { name: "Learning", path: "/Learning" },
//   { name: "Tests & Services", path: "/tests-services" },
//   { name: "Contacts", path: "/contacts" },
// ];

// export default function MobileNav({ open, setOpen }) {
//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           initial={{ x: "100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "100%" }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//           className="fixed inset-0 z-[9999] bg-[#081A33] overflow-y-auto flex flex-col justify-between min-[1025px]:hidden"
//         >
//           <div>
//             <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
//               <h2 className="text-xl font-normal tracking-tight text-white">
//                 Odisha Polyclinic
//               </h2>

//               <button
//                 onClick={() => setOpen(false)}
//                 className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
//                 type="button"
//               >
//                 <FaTimes size={20} />
//               </button>
//             </div>

//             <div className="px-6 py-8 space-y-2">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setOpen(false)}
//                   className="group flex items-center justify-between rounded-2xl px-5 py-4 text-[13px] font-normal tracking-tight text-white transition-all duration-300 hover:bg-white/10"
//                 >
//                   <span>{item.name}</span>
//                   <FaChevronRight className="opacity-0 transition-all duration-300 group-hover:translate-x-2 group-hover:opacity-100" />
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="p-6 bg-[#081A33]">
//             <Link
//               to="/appointment"
//               onClick={() => setOpen(false)}
//               className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0F4C81] to-[#38BDF8] py-4 text-[13px] font-normal tracking-tight text-white shadow-xl transition hover:scale-[1.02]"
//             >
//               <FaCalendarCheck />
//               Book Appointment
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiX,
  FiUser,
  FiHome,
  FiGrid,
  FiInfo,
  FiUserCheck,
  FiBookOpen,
  FiActivity,
  FiPhoneCall,
  FiChevronRight,
  FiCalendar,
} from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/", icon: <FiHome className="text-xl" /> },
  { name: "Departments", path: "/departments", icon: <FiGrid className="text-xl" /> },
  { name: "About", path: "/about", icon: <FiInfo className="text-xl" /> },
  { name: "Doctor", path: "/doctor", icon: <FiUserCheck className="text-xl" /> },
  { name: "Learning", path: "/Learning", icon: <FiBookOpen className="text-xl" /> },
  { name: "Tests & Services", path: "/tests-services", icon: <FiActivity className="text-xl" /> },
  { name: "Contacts", path: "/contacts", icon: <FiPhoneCall className="text-xl" /> },
];

export default function MobileNav({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[9999] flex font-sans antialiased min-[1025px]:hidden">
          {/* Dimmed Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
          />

          {/* Side Drawer Menu */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="relative z-10 flex h-full w-[82%] max-w-xs flex-col bg-white shadow-2xl"
          >
            {/* Top Header Banner */}
            <div className="relative bg-[#2a687d] px-5 py-6 text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white"
                type="button"
              >
                <FiX className="text-lg" />
              </button>

              <div className="flex items-center gap-3.5 pt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white">
                  <FiUser className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-base font-medium tracking-tight text-white">
                    Odisha Polyclinic
                  </h3>
                  <p className="text-xs text-white/80 font-normal">
                    Healthcare Services
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
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

                    <FiChevronRight className="text-base text-slate-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-slate-600" />
                  </Link>

                  {/* Horizontal Separator Line */}
                  {index < navItems.length - 1 && (
                    <div className="border-t border-slate-100" />
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Action CTA */}
            <div className="border-t border-slate-100 bg-slate-50 p-4">
              <Link
                to="/appointment"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#2a687d] py-3.5 text-sm font-medium tracking-tight text-white shadow-sm transition hover:bg-[#225465] active:scale-[0.98]"
              >
                <FiCalendar className="text-base" />
                Book Appointment
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}