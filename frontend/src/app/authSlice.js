// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   accessToken: null,
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,

//   reducers: {
//     setCredentials: (state, action) => {
//       state.accessToken = action.payload.accessToken;
//       state.user = action.payload.user;
//     },

//     clearCredentials: (state) => {
//       state.accessToken = null;
//       state.user = null;
//     },
//   },
// });

// export const {
//   setCredentials,
//   clearCredentials,
// } = authSlice.actions;

// export const selectCurrentToken = (state) =>
//   state.auth.accessToken;

// export const selectCurrentUser = (state) =>
//   state.auth.user;

// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },

   
    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearCredentials: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const {
  setCredentials,
  setUser, 
  clearCredentials,
} = authSlice.actions;

export const selectCurrentToken = (state) =>
  state.auth.accessToken;

export const selectCurrentUser = (state) =>
  state.auth.user;

export default authSlice.reducer;