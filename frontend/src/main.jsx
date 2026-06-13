// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// //import { store } from "./redux/store";
// import { store } from "./app/store";
// import App from "./App";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import { store } from "./app/store";
import { router } from "./routes/AppRoutes";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#e5f9f8]">
            <div className="w-12 h-12 border-4 border-[#1a504c] border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);