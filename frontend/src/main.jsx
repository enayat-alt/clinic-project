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
              <div className="flex min-h-screen items-center justify-center bg-slate-50/50 font-sans antialiased selection:bg-cyan-500 selection:text-white">
                <div className="flex flex-col items-center px-6 py-10 text-center">
                 
                  <div className="relative flex items-center justify-center">
                    
                    <div className="absolute h-16 w-16 animate-ping rounded-full bg-cyan-500/20 duration-1000" />

                    
                    <div className="h-14 w-14 animate-spin rounded-full border-[3.5px] border-slate-200 border-t-[#2a687d] border-r-[#2a687d]" />

                    
                    <div className="absolute h-3 w-3 rounded-full bg-[#2a687d]" />
                  </div>

                  <h2 className="mt-8 text-lg font-medium tracking-tight text-slate-900">
                    Preparing your experience
                  </h2>

                  <p className="mt-1.5 text-xs font-normal text-slate-500 tracking-normal">
                    Please wait while we prepare your experience.
                  </p>

                  {/* Subtle Progress Bar Indicator */}
                  <div className="mt-6 h-1 w-28 overflow-hidden rounded-full bg-slate-200/80">
                    <div className="h-full w-full origin-left-right animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-[#2a687d] to-cyan-500" />
                  </div>
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
