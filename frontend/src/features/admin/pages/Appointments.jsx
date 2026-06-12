import {
  useGetAppointmentsQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} from "../../../services/appointmentApi";

export default function AdminAppointments() {
  const { data, isLoading, refetch } =
    useGetAppointmentsQuery();

  const [acceptAppointment] =
    useAcceptAppointmentMutation();

  const [rejectAppointment] =
    useRejectAppointmentMutation();

  const handleAccept = async (id) => {
    try {
      await acceptAppointment(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (id) => {
    try {
      await rejectAppointment(id).unwrap();
      refetch();
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center py-10">
        Loading appointments...
      </div>
    );
  }

  const appointments = data?.appointments || [];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Appointments
        </h1>

        <p className="text-gray-500 mt-1">
          Manage all appointment requests
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#1a504c] text-white">
              <tr>
                <th className="p-4 text-left">
                  Patient
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  Service
                </th>

                <th className="p-4 text-left">
                  Date
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
              {appointments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b"
                >
                  <td className="p-4">
                    <div>
                      <p className="font-semibold">
                        {item.fullName}
                      </p>

                      <p className="text-sm text-gray-500">
                        {item.email}
                      </p>
                    </div>
                  </td>

                  <td className="p-4">
                    {item.phone}
                  </td>

                  <td className="p-4">
                    {item.service}
                  </td>

                  <td className="p-4">
                    {new Date(
                      item.appointmentDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.status ===
                        "confirmed"
                          ? "bg-green-100 text-green-700"
                          : item.status ===
                            "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() =>
                        handleAccept(item.id)
                      }
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Accept
                    </button>

                    <button
                      onClick={() =>
                        handleReject(item.id)
                      }
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}

              {appointments.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-8"
                  >
                    No appointments found
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