import { configureStore } from "@reduxjs/toolkit";
import dessertsReduser from "./featues/dessertsSlice";

export const store = configureStore({
  reducer: {
    desserts: dessertsReduser,
  },
});
