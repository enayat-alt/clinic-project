


// import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

// const navItems = [
//   { name: "Home", path: "/" },
//   { name: "Departments", path: "/departments" },
//   { name: "About", path: "/about" },
//   { name: "Doctor", path: "/doctor" },
//   { name: "Learning", path: "/Learning" },
//   { name: "Tests & Services", path: "/tests-services" },
//   { name: "Contacts", path: "/contacts" },
// ];

// export default function Nav({ scrolled }) {
//   return (
//     <nav className="flex items-center gap-6 xl:gap-8">
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           className={({ isActive }) =>
//             `relative text-[13px] font-normal tracking-tight transition-colors duration-300 ${
//               isActive
//                 ? scrolled
//                   ? "text-[#081A33]"
//                   : "text-white"
//                 : scrolled
//                 ? "text-slate-600 hover:text-[#081A33]"
//                 : "text-white/80 hover:text-white"
//             }`
//           }
//         >
//           {({ isActive }) => (
//             <div className="relative py-2">
//               {item.name}

//               {isActive && (
//                 <motion.span
//                   layoutId="activeNav"
//                   className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full ${
//                     scrolled ? "bg-blue-600" : "bg-white"
//                   }`}
//                   transition={{
//                     type: "spring",
//                     stiffness: 400,
//                     damping: 30,
//                   }}
//                 />
//               )}
//             </div>
//           )}
//         </NavLink>
//       ))}
//     </nav>
//   );
// }

import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Departments", path: "/departments" },
  { name: "About", path: "/about" },
  { name: "Doctor", path: "/doctor" },
  { name: "Learning", path: "/Learning" },
  { name: "Tests & Services", path: "/tests-services" },
  { name: "Contacts", path: "/contacts" },
];

export default function Nav({ scrolled }) {
  const location = useLocation();
  
  // Check if current route is Home page
  const isHomePage = location.pathname === "/";

  // Force "scrolled" behavior (dark text) for ALL pages except Home
  const forceDarkTheme = scrolled || !isHomePage;

  return (
    <nav className="flex items-center gap-6 xl:gap-8">
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative text-[13px] font-medium tracking-tight transition-colors duration-300 ${
              isActive
                ? forceDarkTheme
                  ? "text-[#081A33]"
                  : "text-white"
                : forceDarkTheme
                ? "text-slate-600 hover:text-[#081A33]"
                : "text-white/80 hover:text-white"
            }`
          }
        >
          {({ isActive }) => (
            <div className="relative py-2">
              {item.name}

              {isActive && (
                <motion.span
                  layoutId="activeNav"
                  className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full ${
                    forceDarkTheme ? "bg-[#081A33]" : "bg-white"
                  }`}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}