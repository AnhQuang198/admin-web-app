import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    enableLoading: (state) => {
      state.isLoading = 70;
    },
    disableLoading: (state) => {
      state.isLoading = 100;
    },
  },
});

export const { enableLoading, disableLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
