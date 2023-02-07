import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: 0,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    enableLoading: (state) => {
      console.log("enableLoading");
      state.isLoading = 70;
    },
    disableLoading: (state) => {
      console.log("disable");
      state.isLoading = 100;
    },
  },
});

export const { enableLoading, disableLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
