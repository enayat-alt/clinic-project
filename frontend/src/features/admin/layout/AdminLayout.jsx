
// import { Outlet, NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export default function AdminLayout() {
//     const navigate = useNavigate();

// const handleLogout = () => {
//   localStorage.removeItem("accessToken");
//   localStorage.removeItem("refreshToken");
//   localStorage.removeItem("user");

//   navigate("/learning");
// };
//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#1a504c] text-white">
//         <div className="p-6 border-b border-white/20">
//           <h2 className="text-xl font-bold">
//             Admin Panel
//           </h2>
//         </div>

//         <nav className="p-4 space-y-2">
//           <NavLink
//             to="/admin/dashboard"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Dashboard
//           </NavLink>

//           <NavLink
//             to="/admin/appointments"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Appointments
//           </NavLink>

//           <NavLink
//             to="/admin/students"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Students
//           </NavLink>

//           <NavLink
//             to="/admin/courses"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Courses
//           </NavLink>

//           {/* <NavLink
//             to="/admin/users"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Users
//           </NavLink> */}

//           <NavLink
//             to="/admin/setting"
//             className="block px-4 py-3 rounded-lg hover:bg-white/10"
//           >
//             Settings
//           </NavLink>
//         </nav>
//       </aside>

//       {/* Main Area */}
//       <div className="flex-1">
//         {/* Header */}
//         <header className="bg-white h-16 border-b flex items-center justify-between px-6">
//           <h1 className="font-semibold text-lg">
//             Odisha Polyclinic™ Admin
//           </h1>

//           <button  onClick={handleLogout} className=" text-red-500 px-4 py-2 rounded-lg">
//             Logout
//           </button>
//         </header>

//         {/* Page Content */}
//         <main className="p-6">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }


import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    navigate("/learning");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      name: "Appointments",
      path: "/admin/appointments",
    },
    {
      name: "Students",
      path: "/admin/students",
    },
    {
      name: "Courses",
      path: "/admin/courses",
    },
    {
      name: "Settings",
      path: "/admin/setting",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-0 left-0 z-50
          h-screen w-64 bg-[#1a504c] text-white
          transform transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="p-6 border-b border-white/20 flex items-center justify-between">
          <h2 className="text-xl font-bold">
            Admin Panel
          </h2>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-2xl"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-[#1a504c] font-semibold"
                    : "hover:bg-white/10"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white h-16 border-b flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="lg:hidden text-2xl text-[#1a504c]"
            >
              ☰
            </button>

            <h1 className="font-semibold text-sm md:text-lg">
              Odisha Polyclinic™ Admin
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 md:px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="p-4 md:p-6 overflow-x-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}