import { useEffect } from "react";

import { Scroll } from "./animation";
import { AppRouterProvider } from "./router";

export default function App() {
  useEffect(() => {
    Scroll();
  }, []);
  return <AppRouterProvider />;
}
