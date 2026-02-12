import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import { Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import CreateDonorProfile from "./pages/DonorProfileCreation.jsx";
import { MyContextProvider } from "./utils/GlobalContext.jsx";
import Requests from "./pages/Request_Donor/Requests.jsx";
import AssignedRequests from "./pages/Request_Donor/AssignedRequests.jsx";
import AcceptedRequests from "./pages/Request_Donor/AcceptedRequests.jsx";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ProtectedRoutes from "./utils/ProtectedRoute.jsx";
import OrgLayout from "./layouts/OrgLayout.jsx";
import DashboardHome from "./pages/organization/DashboardHome.jsx";
import CreateRequest from "./pages/organization/CreateRequest.jsx";
import DonorMatches from "./pages/organization/DonorMatches.jsx";
import DonationHistory from "./pages/DonationHistory.jsx";
import Profile from "./pages/Profile.jsx";
import Notification from "./pages/Notification.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<LandingPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="organization" element={<OrgLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardHome />} />
        <Route path="create" element={<CreateRequest />} />
        <Route path="active" element={<DashboardHome />} />
        <Route path="matches" element={<DonorMatches />} />
        <Route path="notifications" element={<DashboardHome />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="createDonorProfile" element={<CreateDonorProfile />} />
        <Route path={"/donor"} element={<Home />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="requests" element={<Requests />}>
            <Route path="assigned" element={<AssignedRequests />} />
            <Route path="accepted" element={<AcceptedRequests />} />
          </Route>
          <Route path="history" element={<DonationHistory />} />
          <Route path="notification" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  </StrictMode>,
);
