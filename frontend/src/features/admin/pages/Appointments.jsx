import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import {
  useGetAppointmentsQuery,
  useAcceptAppointmentMutation,
  useRejectAppointmentMutation,
} from "../../../services/appointmentApi";

import AppointmentFilters from "../components/AppointmentFilters";
import AppointmentStats from "../components/AppointmentStats";
import AppointmentTable from "../components/AppointmentTable";
import Pagination from "../components/Pagination";

export default function AdminAppointments() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [searchParams, setSearchParams] =
    useSearchParams();

  const page =
    Number(searchParams.get("page")) || 1;

  const {
    data,
    isLoading,
    refetch,
  } = useGetAppointmentsQuery({
    page,
    limit: 6,
  });

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
      <div className="text-center py-10 text-slate-500">
        Loading appointments...
      </div>
    );
  }

  const appointments =
    data?.appointments || [];

  const pagination =
    data?.pagination;

  const filteredAppointments =
    appointments.filter((item) => {
      const matchesSearch =
        item.fullName
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        item.email
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        !status ||
        item.status === status;

      return (
        matchesSearch &&
        matchesStatus
      );
    });

  const pendingCount =
    appointments.filter(
      (appointment) =>
        appointment.status === "pending"
    ).length;

  const confirmedCount =
    appointments.filter(
      (appointment) =>
        appointment.status === "confirmed"
    ).length;

  const cancelledCount =
    appointments.filter(
      (appointment) =>
        appointment.status === "cancelled"
    ).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Appointments
        </h1>

        <p className="text-slate-500 dark:text-slate-400 mt-1">
          Manage all appointment requests
        </p>
      </div>

      {/* Stats */}
      <AppointmentStats
        pendingCount={pendingCount}
        confirmedCount={confirmedCount}
        cancelledCount={cancelledCount}
      />

      {/* Filters */}
      <AppointmentFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      {/* Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
        <AppointmentTable
          appointments={
            filteredAppointments
          }
          onAccept={handleAccept}
          onReject={handleReject}
        />

        <Pagination
          currentPage={page}
          totalPages={
            pagination?.totalPages
          }
          onPageChange={(newPage) =>
            setSearchParams({
              page: newPage,
            })
          }
        />
      </div>
    </div>
  );
}