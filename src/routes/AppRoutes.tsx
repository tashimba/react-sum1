import { Routes, Route, Outlet } from "react-router-dom";
import { GuestRoute } from "./GuestRoute";
import { LoginPage } from "../pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { HomePage, ProfilePage, RegistrationPage } from "../pages";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <GuestRoute>
              <RegistrationPage />
            </GuestRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
