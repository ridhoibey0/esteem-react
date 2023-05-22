import About from "@/pages/about";
import Home from "@/pages/home";
import Profile from "@/pages/profile";
import Rekap from "@/pages/rekap";
import Login from "@/pages/login";
import History from "@/pages/history";

import { createBrowserRouter } from "react-router-dom";
import Absen from "@/pages/absen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/rekap",
    element: <Rekap />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/presensi",
    element: <Absen />,
  },
]);
