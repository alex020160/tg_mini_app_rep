import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./app/router";
import { initTelegram } from "./shared/telegram/init";
import { bootstrapAuth } from "./shared/auth/bootstrap";
import { AppProviders } from "./app/providers";

async function startApp() {
  initTelegram();
  await bootstrapAuth();

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <AppProviders>
        <RouterProvider router={router} />
      </AppProviders>
    </StrictMode>,
  );
}

startApp();
