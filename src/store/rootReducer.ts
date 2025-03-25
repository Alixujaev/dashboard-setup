import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authSlice";
import { userApi } from "../features/user/userSlice";
import uiReducer from "../features/ui/uiSlice";
import authReduce from "../features/auth/authSlice";

// Barcha reducerlarni birlashtirish
const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReduce,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
});

export default rootReducer;
