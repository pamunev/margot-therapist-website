import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
/*import { BrowserRouter as Router } from "react-router-dom";*/
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Home from "./routes/home";
import AboutMe from "./routes/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-me",
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
