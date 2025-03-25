import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://api.example.com/auth"; 

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string; user: any }, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

interface AuthState {
  token: string | null;
  user: any | null;
  role: string | null;
}

const initialState: AuthState = {
  token: 'token', 
  user: null,
  role: 'admin',
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; user: any }>) => {
      state.token = null;
      state.user = action.payload.user;
      state.role = 'user';
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const { useLoginMutation } = authApi;
export default authSlice.reducer;
