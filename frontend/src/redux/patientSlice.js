import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: { appointments: [], prescriptions: [], reports: [], loading: false, error: null },
  reducers: {
    setAppointments(state, action) { state.appointments = action.payload; },
    setPrescriptions(state, action) { state.prescriptions = action.payload; },
    setReports(state, action) { state.reports = action.payload; },
  },
});

export const { setAppointments, setPrescriptions, setReports } = patientSlice.actions;
export default patientSlice.reducer;
