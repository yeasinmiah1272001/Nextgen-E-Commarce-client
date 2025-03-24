import { configureStore } from "@reduxjs/toolkit";
import nextSlice from "./nextGenSlice";
export const store = configureStore({
  reducer: {
    orabi: nextSlice,
  },
});
