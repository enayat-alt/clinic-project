// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useGetStudentsQuery } from "../courses/services/dashboardStatsApi";

// import StudentFilters from "../components/StudentFilters";
// import StudentStats from "../components/StudentStats";
// import StudentsTable from "../components/StudentsTable";
// import Pagination from "../components/Pagination";

// export default function AdminStudents() {
//   const [search, setSearch] = useState("");
//   const [role, setRole] = useState("");

//   const [searchParams, setSearchParams] =
//     useSearchParams();

//   const page =
//     Number(searchParams.get("page")) || 1;

//   const {
//     data,
//     isLoading,
//     error,
//   } = useGetStudentsQuery({
//     page,
//     limit: 6,
//   });

//   const students = data?.students || [];
//   const pagination = data?.pagination;

//   const filteredStudents = students.filter(
//     (student) => {
//       const matchesSearch =
//         student.name
//           ?.toLowerCase()
//           .includes(search.toLowerCase()) ||
//         student.email
//           ?.toLowerCase()
//           .includes(search.toLowerCase());

//       const matchesRole =
//         !role || student.role === role;

//       return matchesSearch && matchesRole;
//     },
//   );

//   const totalUsers =
//     pagination?.total || 0;

//   const studentCount = students.filter(
//     (student) =>
//       student.role === "student",
//   ).length;

//   const adminCount = students.filter(
//     (student) => student.role === "admin",
//   ).length;

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

//   return (
//     <div>
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
//           Students
//         </h1>

//         <p className="text-slate-500 dark:text-slate-400 mt-1">
//           Manage all registered students
//         </p>
//       </div>

//       <StudentStats
//         totalUsers={totalUsers}
//         studentCount={studentCount}
//         adminCount={adminCount}
//       />

//       <StudentFilters
//         search={search}
//         setSearch={setSearch}
//         role={role}
//         setRole={setRole}
//       />

//       <StudentsTable
//         students={filteredStudents}
//       />

//       <Pagination
//         currentPage={page}
//         totalPages={
//           pagination?.totalPages || 1
//         }
//         onPageChange={(newPage) =>
//           setSearchParams({
//             page: newPage,
//           })
//         }
//       />
//     </div>
//   );
// }


import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetStudentsQuery } from "../courses/services/dashboardStatsApi";

import StudentFilters from "../components/StudentFilters";
import StudentStats from "../components/StudentStats";
import StudentsTable from "../components/StudentsTable";
import Pagination from "../components/Pagination";

export default function AdminStudents() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const {
    data,
    isLoading,
    error,
  } = useGetStudentsQuery({
    page,
    limit: 6,
  });

  const students = data?.students || [];
  const pagination = data?.pagination;

  const filteredStudents = students.filter(
    (student) => {
      const matchesSearch =
        student.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        student.email
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesRole =
        !role || student.role === role;

      return (
        matchesSearch &&
        matchesRole
      );
    },
  );

  const totalUsers =
    pagination?.total || 0;

  const studentCount = students.filter(
    (student) =>
      student.role === "student",
  ).length;

  const adminCount = students.filter(
    (student) => student.role === "admin",
  ).length;

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

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Students
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage all registered students
        </p>
      </div>

      <StudentStats
        totalUsers={totalUsers}
        studentCount={studentCount}
        adminCount={adminCount}
      />

      <StudentFilters
        search={search}
        setSearch={setSearch}
        role={role}
        setRole={setRole}
      />

      <StudentsTable
        students={filteredStudents}
      />

      <Pagination
        currentPage={page}
        totalPages={
          pagination?.totalPages || 1
        }
        onPageChange={(newPage) =>
          setSearchParams({
            page: newPage,
          })
        }
      />
    </div>
  );
}