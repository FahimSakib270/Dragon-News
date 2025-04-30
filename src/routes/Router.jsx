import { createBrowserRouter } from "react-router";
import HomeLayOut from "../LayOuts/HomeLayOut";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayOut,
  },
  {
    path: "/auth",
    element: <h2>auth</h2>,
  },
  {
    path: "/news",
    element: <h2>news layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error</h2>,
  },
]);
