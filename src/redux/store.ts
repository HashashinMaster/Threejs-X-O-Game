import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
export const store = configureStore({
  reducer: { gameReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
