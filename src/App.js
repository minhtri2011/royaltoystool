import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import TagsPage from "./pages/tagsPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tags",
    element: <TagsPage />,
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
