import { configureStore } from "@reduxjs/toolkit";

import viewReducer from "@/store/slices/view";
import configSlice from "@/store/slices/config";
import quizSlice from "@/store/slices/quiz";

const store = configureStore({
  reducer: { view: viewReducer, config: configSlice, quiz: quizSlice },
});

export default store;
