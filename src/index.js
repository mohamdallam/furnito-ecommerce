import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
