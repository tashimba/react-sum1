import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  username: string;
}

const initialState: AuthState = {
  isAuth: localStorage.getItem("isAuth") === "true",
  username: localStorage.getItem("username") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string }>) {
      state.isAuth = true;
      state.username = action.payload.username;
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("username", action.payload.username);
    },
    logout(state) {
      state.isAuth = false;
      state.username = "";
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
    },
  },
});
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuth;

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
