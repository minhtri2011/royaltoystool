import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routers} />
      <Toaster />
    </>
  );
}

export default App;
