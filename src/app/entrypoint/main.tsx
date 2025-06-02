import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "../styles/index.css";
import { routes } from "../routes";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find the root element");
} else {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={routes} />
    </StrictMode>
  );
}
