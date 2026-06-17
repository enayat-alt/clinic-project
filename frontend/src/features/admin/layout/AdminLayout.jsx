import { useState } from "react";
import { useLogoutMutation } from "../../../services/authApi";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  BookOpen,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
} from "lucide-react";
import Avatar from "../common/Avatar";
import { useTheme } from "../../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const menuItems = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Appointments", path: "/admin/appointments", icon: CalendarCheck },
  { name: "Students", path: "/admin/students", icon: Users },
  { name: "Courses", path: "/admin/courses", icon: BookOpen },
  { name: "Settings", path: "/admin/setting", icon: Settings },
];

export default function AdminLayout() {
  const [logoutUser] = useLogoutMutation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // const handleLogout = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("user");
  //   navigate("/learning");
  // };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
    } catch (error) {
      console.error("Logout failed", error);
    }

    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/learning");
  };

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-900">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-64 bg-white dark:bg-slate-800 border-r border-slate-100 dark:border-slate-700 z-50 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 flex flex-col`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <span className="font-semibold text-slate-800 dark:text-white">
              Admin Panel
            </span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                      : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50"
                  }`
                }
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-3 border-t border-slate-100 dark:border-slate-700">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur border-b border-slate-100 dark:border-slate-700 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-slate-500"
            >
              <Menu size={22} />
            </button>
            <h1 className="font-semibold text-slate-800 dark:text-white text-sm md:text-lg">
              odishapolyclinic learning admin
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="relative p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full" />
            </button>
            <div className="pl-2 border-l border-slate-100 dark:border-slate-700">
              <Avatar name="Admin " size={36} />
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
