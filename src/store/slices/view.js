import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_VIEWS } from "@/constants/views";

const viewSlice = createSlice({
  name: "view",
  initialState: INITIAL_VIEWS,
  reducers: {
    updateView(state, action) {
      if (action.payload !== "loading") state.viewCount++;

      state.previousView = state.currentView;
      state.currentView = action.payload;
    },
    updateViewOnBack(state) {
      state.currentView = state.previousView;
      state.viewCount--;

      switch (state.previousView) {
        case "loading":
          state.currentView = "setting";
          state.previousView = "category";
          break;
        case "setting":
          state.previousView = "category";
          break;
        case "category":
          state.previousView = null;
          break;
        case "quiz":
          state.currentView = "setting";
          state.previousView = "category";
          break;
        default:
          state.previousView = null;
      }
    },
  },
});

export const viewActions = viewSlice.actions;

export default viewSlice.reducer;
