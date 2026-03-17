import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CalendarPage from "../pages/CalendarPage";
import PassportPage from "../pages/PassportPage";
import PassportEditPage from "../pages/PassportEditPage";
import ProfilePage from "../pages/ProfilePage";
import ProcedurePage from "../pages/ProcedurePage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/calendar", element: <CalendarPage /> },
  { path: "/passport", element: <PassportPage /> },
  { path: "/passport/edit", element: <PassportEditPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/procedure/:type", element: <ProcedurePage /> },
]);
