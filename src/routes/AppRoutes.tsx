import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import UnAuthorizedHOC from "../hocs/UnAuthorizedHOC/UnAuthorizedHOC";
import Login from "../view/Login/Login";
import ForgotPassword from "../view/ForgotPassword/ForgotPassword";
import Unauthorized from "../view/Unauthorized/Unauthorized";
import AuthorizedHOC from "../hocs/AuthorizedHOC/AuthorizedHOC";
import { Suspense } from "react";

export const approutes = createBrowserRouter([
  {
    path: "*",
    element: <h1>Page Not Found</h1>,
  },
  {
    path: "/",
    element: <UnAuthorizedHOC />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "login",
        element: (
          <Suspense fallback="loading">
            <Login />
          </Suspense>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <Suspense fallback="loading">
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
  {
    element: <AuthorizedHOC />,
    children: [
      {
        path: "chatbot",
        element: <Suspense fallback="loading">ChatBot</Suspense>,
        children: [
          {
            path: "dashBoard",
            element: <Suspense fallback="loading">DashBoard</Suspense>,
          },
          {
            path: "chatbots",
            element: <Suspense fallback="loading">ChatBots</Suspense>,
          },
          {
            path: "conversations",
            element: <Suspense fallback="loading">Conversation</Suspense>,
          },
          {
            path: "teams",
            element: <Suspense fallback="loading">Teams</Suspense>,
          },
        ],
      },
      {
        path: "facebook",
        element: <Suspense fallback="loading">FaceBook</Suspense>,
      },
    ],
  },
]);
