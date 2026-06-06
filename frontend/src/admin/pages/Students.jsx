import { useState } from "react";

export default function AdminStudents() {
  const [students] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      role: "student",
      status: "active",
      joinedAt: "2026-06-01",
    },
    {
      id: 2,
      name: "Amit Singh",
      email: "amit@gmail.com",
      role: "student",
      status: "active",
      joinedAt: "2026-06-03",
    },
  ]);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Students
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all registered students
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a504c] text-white">
              <tr>
                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-left">
                  Role
                </th>

                <th className="p-4 text-left">
                  Joined
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b"
                >
                  <td className="p-4 font-medium">
                    {student.name}
                  </td>

                  <td className="p-4">
                    {student.email}
                  </td>

                  <td className="p-4 capitalize">
                    {student.role}
                  </td>

                  <td className="p-4">
                    {student.joinedAt}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {student.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-2">
                    <button className="bg-blue-500 text-white px-3 py-1 rounded">
                      View
                    </button>

                    <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                      Block
                    </button>

                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {students.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8"
                  >
                    No students found
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