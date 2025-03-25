import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  theme: "light" | "dark";
  sidebarOpen: boolean;
}

const initialState: UIState = {
  theme: "light",
  sidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

// Export reducers
export const { toggleTheme, toggleSidebar, setSidebarOpen } = uiSlice.actions;
export default uiSlice.reducer;
