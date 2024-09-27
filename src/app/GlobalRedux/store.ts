"use client";

import { configureStore } from "@reduxjs/toolkit";
import userReducer, { usersApi } from "../../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
