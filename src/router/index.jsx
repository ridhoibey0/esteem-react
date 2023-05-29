import About from "@/pages/about";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Rekap from "@/pages/rekap";
import Login from "@/pages/login";
import History from "@/pages/history";

import { createBrowserRouter } from "react-router-dom";
import Absen from "@/pages/absen";
import Protected from "./ProtectedRoute";
import AbsenOut from "@/pages/absen/out";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/about",
    element: (
      <Protected>
        <About />
      </Protected>
    ),
  },
  {
    path: "/profile",
    element: (
      <Protected>
        <Profile />
      </Protected>
    ),
  },
  {
    path: "/rekap",
    element: (
      <Protected>
        <Rekap />
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/history",
    element: (
      <Protected>
        <History />
      </Protected>
    ),
  },
  {
    path: "/presensi",
    element: (
      <Protected>
        <Absen />
      </Protected>
    ),
  },
  {
    path: "/presensi/out",
    element: (
      <Protected>
        <AbsenOut />
      </Protected>
    ),
  },
]);
