import { NavLink, useLocation } from "react-router-dom";

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

  const isHomePage = location.pathname === "/";

  // Dark text on scroll and on non-home pages
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
                <span
                  className={`
                    absolute
                    -bottom-1
                    left-0
                    h-[3px]
                    w-full
                    rounded-full
                    ${
                      forceDarkTheme
                        ? "bg-[#081A33]"
                        : "bg-white"
                    }
                  `}
                />
              )}
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
}