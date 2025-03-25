import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { authApi } from "../features/auth/authSlice";
import { userApi } from "../features/user/userSlice";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
});

// RootState va AppDispatch turlarini export qilish
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
