import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_VIEWS } from "@/constants/views";

const viewSlice = createSlice({
  name: "view",
  initialState: INITIAL_VIEWS,
  reducers: {
    updateView(state, action) {
      state.previousView = state.currentView;
      state.currentView = action.payload;
    },
  },
});

export const viewActions = viewSlice.actions;

export default viewSlice.reducer;
