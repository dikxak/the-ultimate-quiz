import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_CONFIG } from "@/constants/config";

const configSlice = createSlice({
  name: "config",
  initialState: INITIAL_CONFIG,
  reducers: {
    updateConfig(state, action) {
      const { categoryId, category, questionsLength, difficultyLevel } =
        action.payload;

      state.categoryId = categoryId || state.categoryId;
      state.category = category || state.category;
      state.questionsLength = questionsLength || state.questionsLength;
      state.difficultyLevel = difficultyLevel || state.difficultyLevel;
    },
  },
});

export const configActions = configSlice.actions;

export default configSlice.reducer;
