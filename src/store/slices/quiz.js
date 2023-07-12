import { createSlice } from "@reduxjs/toolkit";

const INITIAL_QUIZ = {
  questions: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: INITIAL_QUIZ,
  },
  reducers: {
    updateQuiz(state, action) {
      state.questions = action.payload;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
