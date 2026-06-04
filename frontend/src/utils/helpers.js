export const formatDate = (str) =>
  new Date(str).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const formatTime = (str) =>
  new Date(`1970-01-01T${str}`).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

export const getInitials = (name = "") =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

export const truncate = (text = "", max = 120) =>
  text.length <= max ? text : text.slice(0, max).trimEnd() + "…";

export const statusColor = (status) => ({
  pending:   "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  completed: "bg-blue-100 text-blue-700",
}[status] || "bg-gray-100 text-gray-700");
