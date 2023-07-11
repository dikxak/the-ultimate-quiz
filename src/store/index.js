import { configureStore } from "@reduxjs/toolkit";

import viewReducer from "@/store/slices/view";
import configSlice from "@/store/slices/config";

const store = configureStore({
  reducer: { view: viewReducer, config: configSlice },
});

export default store;
