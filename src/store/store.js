import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducers";

const store = configureStore({
  reducer: {
    counter,
  },
});
export default store;
