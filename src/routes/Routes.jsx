import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import Details from "../pages/Details";
import AllCampaigns from "../pages/AllCampaigns";
import Login from "../pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Register";
import AddNewCampaign from "../pages/AddNewCampaign";
import PrivateRoute from "./PrivateRoute";
import MyCampaign from "../pages/MyCampaign";

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
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:4000/all/${params.id}`),
      },
      {
        path: "/allCampaign",
        element: <AllCampaigns />,
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaign/:email",
        element: (
          <PrivateRoute>
            <MyCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/myDonation",
        element: (
          <PrivateRoute>
            <h1>My Donation</h1>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
