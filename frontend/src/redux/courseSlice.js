import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
  name: "course",
  initialState: { courses: [], current: null, loading: false, error: null },
  reducers: {
    setCourses(state, action) { state.courses = action.payload; },
    setCurrentCourse(state, action) { state.current = action.payload; },
  },
});

export const { setCourses, setCurrentCourse } = courseSlice.actions;
export default courseSlice.reducer;
