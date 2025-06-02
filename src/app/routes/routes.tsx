import { createBrowserRouter } from "react-router";
import { HomePage } from "@/pages/home";
import { DefaultLayout } from "@/app/layouts";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);
