import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts";
import { HomePage } from "../../pages";

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
