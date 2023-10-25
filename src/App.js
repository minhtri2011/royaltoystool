import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";
import TagsPage from "./pages/tagsPage";
import Giveaway from "./pages/giveaway";
import Snowfall from "./components/Snowfall";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tags",
    element: <TagsPage />,
  },
  {
    path: "/giveaway",
    element: <Giveaway/>,
  },
]);
function App() {
  return (
    <div className=" min-h-screen ">
      <Snowfall/>
      <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
}

export default App;
