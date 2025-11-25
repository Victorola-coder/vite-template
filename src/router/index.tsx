import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Home, NotFound } from "../pages";
import { Header, Footer } from "../components/layout";

const RootShell = () => (
  <div className="min-h-dvh bg-white text-dark">
    <Header />
    <main className="bg-white">
      <Outlet />
    </main>
    <Footer />
  </div>
);

const rootRoute = createRootRoute({
  component: RootShell,
  notFoundComponent: NotFound,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: () => null,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}

