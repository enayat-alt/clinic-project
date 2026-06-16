
// import { useState } from "react";
// import { useGetStudentsQuery } from "../courses/services/dashboardStatsApi";

// export default function AdminStudents() {
//   const [search, setSearch] = useState("");

//   const {
//     data: students = [],
//     isLoading,
//     error,
//   } = useGetStudentsQuery();

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-[70vh]">
//         <div className="text-lg font-semibold text-slate-500 dark:text-slate-400">
//           Loading students...
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-[70vh]">
//         <div className="text-lg font-semibold text-rose-500">
//           Failed to load students
//         </div>
//       </div>
//     );
//   }

//   const filteredStudents = students.filter(
//     (student) =>
//       student.name
//         ?.toLowerCase()
//         .includes(search.toLowerCase()) ||
//       student.email
//         ?.toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   const totalUsers = students.length;

//   const studentCount = students.filter(
//     (student) => student.role === "student"
//   ).length;

//   const adminCount = students.filter(
//     (student) => student.role === "admin"
//   ).length;

//   return (
//     <div>
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
//           Students
//         </h1>

//         <p className="text-slate-500 dark:text-slate-400 mt-1">
//           Manage all registered students
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
//           <p className="text-sm text-slate-500 dark:text-slate-400">
//             Total Users
//           </p>

//           <h2 className="text-3xl font-bold text-indigo-600 mt-2">
//             {totalUsers}
//           </h2>
//         </div>

//         <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
//           <p className="text-sm text-slate-500 dark:text-slate-400">
//             Students
//           </p>

//           <h2 className="text-3xl font-bold text-emerald-600 mt-2">
//             {studentCount}
//           </h2>
//         </div>

//         <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
//           <p className="text-sm text-slate-500 dark:text-slate-400">
//             Admins
//           </p>

//           <h2 className="text-3xl font-bold text-amber-600 mt-2">
//             {adminCount}
//           </h2>
//         </div>
//       </div>

//       {/* Search */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="Search students by name or email..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="
//             w-full md:w-96
//             px-4 py-3
//             rounded-xl
//             border border-slate-200
//             dark:border-slate-600
//             bg-white dark:bg-slate-800
//             text-slate-700 dark:text-white
//             placeholder:text-slate-400
//             focus:outline-none
//             focus:ring-2
//             focus:ring-indigo-500
//           "
//         />
//       </div>

//       {/* Table */}
//       <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-slate-50 dark:bg-slate-700">
//               <tr>
//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Name
//                 </th>

//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Email
//                 </th>

//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Role
//                 </th>

//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Joined
//                 </th>

//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Status
//                 </th>

//                 <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredStudents.map((student) => (
//                 <tr
//                   key={student.id}
//                   className="
//                     border-b border-slate-100 dark:border-slate-700
//                     hover:bg-slate-50 dark:hover:bg-slate-700/50
//                     transition-colors
//                   "
//                 >
//                   <td className="p-4">
//                     <p className="font-semibold text-slate-900 dark:text-white">
//                       {student.name}
//                     </p>
//                   </td>

//                   <td className="p-4 text-slate-700 dark:text-slate-300">
//                     {student.email}
//                   </td>

//                   <td className="p-4">
//                     <span className="capitalize text-slate-700 dark:text-slate-300">
//                       {student.role}
//                     </span>
//                   </td>

//                   <td className="p-4 text-slate-700 dark:text-slate-300">
//                     {new Date(
//                       student.createdAt
//                     ).toLocaleDateString()}
//                   </td>

//                   <td className="p-4">
//                     <span
//                       className="
//                         px-3 py-1 rounded-full text-sm font-medium
//                         bg-emerald-100 text-emerald-700
//                         dark:bg-emerald-900/30
//                         dark:text-emerald-400
//                       "
//                     >
//                       Active
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <div className="flex flex-wrap gap-2">
//                       <button
//                         className="
//                           px-4 py-1.5 rounded-full
//                           bg-indigo-100 text-indigo-700
//                           hover:bg-indigo-200
//                           dark:bg-indigo-900/30
//                           dark:text-indigo-400
//                           transition
//                           text-sm font-medium
//                         "
//                       >
//                         View
//                       </button>

//                       <button
//                         className="
//                           px-4 py-1.5 rounded-full
//                           bg-amber-100 text-amber-700
//                           hover:bg-amber-200
//                           dark:bg-amber-900/30
//                           dark:text-amber-400
//                           transition
//                           text-sm font-medium
//                         "
//                       >
//                         Block
//                       </button>

//                       <button
//                         className="
//                           px-4 py-1.5 rounded-full
//                           bg-rose-100 text-rose-700
//                           hover:bg-rose-200
//                           dark:bg-rose-900/30
//                           dark:text-rose-400
//                           transition
//                           text-sm font-medium
//                         "
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}

//               {filteredStudents.length === 0 && (
//                 <tr>
//                   <td
//                     colSpan="6"
//                     className="py-12 text-center"
//                   >
//                     <p className="text-slate-500 dark:text-slate-400">
//                       No students found.
//                     </p>
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useGetStudentsQuery } from "../courses/services/dashboardStatsApi";
import StudentFilters from "../components/StudentFilters";

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const {
    data: students = [],
    isLoading,
    error,
  } = useGetStudentsQuery();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-slate-500 dark:text-slate-400">
          Loading students...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <div className="text-lg font-semibold text-rose-500">
          Failed to load students
        </div>
      </div>
    );
  }

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      student.email
        ?.toLowerCase()
        .includes(search.toLowerCase());

    const matchesRole =
      !role || student.role === role;

    return matchesSearch && matchesRole;
  });

  const totalUsers = students.length;

  const studentCount = students.filter(
    (student) => student.role === "student"
  ).length;

  const adminCount = students.filter(
    (student) => student.role === "admin"
  ).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Students
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage all registered students
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Total Users
          </p>

          <h2 className="text-3xl font-bold text-indigo-600 mt-2">
            {totalUsers}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Students
          </p>

          <h2 className="text-3xl font-bold text-emerald-600 mt-2">
            {studentCount}
          </h2>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Admins
          </p>

          <h2 className="text-3xl font-bold text-amber-600 mt-2">
            {adminCount}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <StudentFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
      />

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Name
                </th>

                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Email
                </th>

                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Role
                </th>

                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Joined
                </th>

                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Status
                </th>

                <th className="p-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="
                    border-b border-slate-100 dark:border-slate-700
                    hover:bg-slate-50 dark:hover:bg-slate-700/50
                    transition-colors
                  "
                >
                  <td className="p-4">
                    <p className="font-semibold text-slate-900 dark:text-white">
                      {student.name}
                    </p>
                  </td>

                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    {student.email}
                  </td>

                  <td className="p-4">
                    <span className="capitalize text-slate-700 dark:text-slate-300">
                      {student.role}
                    </span>
                  </td>

                  <td className="p-4 text-slate-700 dark:text-slate-300">
                    {new Date(
                      student.createdAt
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className="
                        px-3 py-1 rounded-full text-sm font-medium
                        bg-emerald-100 text-emerald-700
                        dark:bg-emerald-900/30
                        dark:text-emerald-400
                      "
                    >
                      Active
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex flex-wrap gap-2">
                      <button
                        className="
                          px-4 py-1.5 rounded-full
                          bg-indigo-100 text-indigo-700
                          hover:bg-indigo-200
                          dark:bg-indigo-900/30
                          dark:text-indigo-400
                          transition text-sm font-medium
                        "
                      >
                        View
                      </button>

                      <button
                        className="
                          px-4 py-1.5 rounded-full
                          bg-amber-100 text-amber-700
                          hover:bg-amber-200
                          dark:bg-amber-900/30
                          dark:text-amber-400
                          transition text-sm font-medium
                        "
                      >
                        Block
                      </button>

                      <button
                        className="
                          px-4 py-1.5 rounded-full
                          bg-rose-100 text-rose-700
                          hover:bg-rose-200
                          dark:bg-rose-900/30
                          dark:text-rose-400
                          transition text-sm font-medium
                        "
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="py-12 text-center"
                  >
                    <p className="text-slate-500 dark:text-slate-400">
                      No students found.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}