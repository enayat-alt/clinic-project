import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { store } from "./app/store";
import { router } from "./routes/AppRoutes";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";
import SessionRestorer from "./common/auth/SessionRestorer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <SessionRestorer>
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#081A33] via-[#0F2D56] to-[#174A84]">
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 animate-spin rounded-full border-[5px] border-cyan-400/30 border-t-cyan-300"></div>

                  <h2 className="mt-6 text-xl font-semibold text-white">
                    Loading...
                  </h2>

                  <p className="mt-2 text-sm text-slate-300">
                    Please wait while we prepare your experience.
                  </p>
                </div>
              </div>
            }
          >
            <RouterProvider router={router} />
          </Suspense>
        </SessionRestorer>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
