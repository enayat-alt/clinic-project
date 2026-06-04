import api from "./api";

export const appointmentApi = {
  getAll: () => api.get("/appointments"),
  getById: (id) => api.get(`/appointments/${id}`),
  book: (data) => api.post("/appointments", data),
  reschedule: (id, data) => api.put(`/appointments/${id}`, data),
  cancel: (id) => api.delete(`/appointments/${id}`),
  accept: (id) => api.patch(`/appointments/${id}/accept`),
  reject: (id) => api.patch(`/appointments/${id}/reject`),
};
