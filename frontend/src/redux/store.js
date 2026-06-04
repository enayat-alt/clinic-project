import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import patientReducer from "./patientSlice";
import doctorReducer from "./doctorSlice";
import courseReducer from "./courseSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    doctor: doctorReducer,
    course: courseReducer,
  },
});
