import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { useEffect } from "react";
import { Home, NotFound } from "./pages";

import { Scroll } from "./animation";
import { Header, Footer } from "./components/layout";

// this is just for dome pages you want to repeat same component
const Root = () => {
  return (
    <div className="min-h-dvh bg-white text-dark">
      <Header />
      <ScrollRestoration />
      <div className="bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  // we can create another route object here if we don't want the <Root/> to affect it
]);
export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return <RouterProvider router={router} />;
}
