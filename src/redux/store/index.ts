import { configureStore } from "@reduxjs/toolkit";

import filmsSlice from "../slices/filmsSlice";

export const store = configureStore({
  reducer: {
    films: filmsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;