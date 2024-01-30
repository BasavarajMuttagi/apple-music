import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import CategoryGrid from "../components/CategoryGrid.component";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "", element: <CategoryGrid /> }],
  },
]);
export default routes;
