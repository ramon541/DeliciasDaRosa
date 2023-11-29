import { RouterProvider } from "react-router-dom";
import router from "./router";
import Button from "./components/Button";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { ContextProvider } from "./contexts/Context";

export default function App() {
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}
