import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import GPTSlice from "./gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    gpt: GPTSlice,
  },
});

export default store;
