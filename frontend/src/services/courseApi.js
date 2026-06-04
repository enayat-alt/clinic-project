import api from "./api";

export const courseApi = {
  getAll: () => api.get("/courses"),
  getById: (id) => api.get(`/courses/${id}`),
  enroll: (id) => api.post(`/courses/${id}/enroll`),
  getQuiz: (id) => api.get(`/courses/${id}/quiz`),
  submitQuiz: (id, answers) => api.post(`/courses/${id}/quiz`, { answers }),
};
