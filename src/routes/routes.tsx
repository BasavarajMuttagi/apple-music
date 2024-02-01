import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import CategoryGrid from "../components/CategoryGrid.component";
import MusicPlayerWithLyrics from "../components/MusicPlayerWithLyrics.component";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [{ path: "", element: <CategoryGrid /> }],
  },
  {
    path: "/s",
    element: <MusicPlayerWithLyrics />,
  },
]);
export default routes;
