import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState,
  reducers: {
    enableLoading: (state, action) => {
      console.log(state, action.payload);
      state.isLoading = true;
    },
    disableLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { enableLoading, disableLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
