import { createSlice } from "@reduxjs/toolkit";

const INITIAL_QUIZ = {
  questions: [],
  score: 0,
  totalScore: 0,
  time: { minutes: 0, seconds: 0 },
};

const quizSlice = createSlice({
  name: "quiz",
  initialState: INITIAL_QUIZ,
  reducers: {
    updateQuestions(state, action) {
      state.questions = action.payload;
    },
    updateTotalScore(state, action) {
      state.totalScore = action.payload * 10;
    },
    updateScore(state) {
      state.score += 10;
    },
    updateQuizTime(state, action) {
      state.time = action.payload;
    },
  },
});

export const quizActions = quizSlice.actions;

export default quizSlice.reducer;
