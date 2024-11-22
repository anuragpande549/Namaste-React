import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    storeResult: (state, action) => {
      return Object.assign(state, action.payload);
    },
  },
});

export const { storeResult } = SearchSlice.actions;
export default SearchSlice.reducer;
