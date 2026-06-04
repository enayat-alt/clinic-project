import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: { patients: [], appointments: [], loading: false, error: null },
  reducers: {
    setPatients(state, action) { state.patients = action.payload; },
    setAppointments(state, action) { state.appointments = action.payload; },
  },
});

export const { setPatients, setAppointments } = doctorSlice.actions;
export default doctorSlice.reducer;
