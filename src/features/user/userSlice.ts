import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// API URL (o'zingizning backend API manzilingizni qo'ying)
const API_URL = "https://api.example.com/get-user-data"; 

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUserData: builder.query<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials, // Foydalanuvchi ma'lumotlarini yuborish
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    
  }),
});

// Auto-generated hook
export const { useGetUserDataQuery } = userApi;
