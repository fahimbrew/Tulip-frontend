import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import AllCampaigns from "../pages/AllCampaigns";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campaign/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:4000/all/${params.id}`),
      },
      {
        path: "/allCampaign",
        element: <AllCampaigns />,
      },
    ],
  },
]);

export default router;
