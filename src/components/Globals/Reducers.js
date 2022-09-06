import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: null,
};

const Reducers = createSlice({
  name: "pension",
  initialState,
  reducers: {
    user: (state, { payload }) => {
      state.current = payload;
    },
    signOut: (state, { payload }) => {
      state.current = null;
    },
  },
});

export const { user, signOut } = Reducers.actions;

export default Reducers.reducer;
