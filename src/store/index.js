import { configureStore } from "@reduxjs/toolkit";

import viewReducer from "@/store/slices/view";

const store = configureStore({ reducer: { view: viewReducer } });

export default store;
