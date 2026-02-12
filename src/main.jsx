import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
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
import DonationHistory from "./pages/DonationHistory.jsx";
import Notification from "./pages/Notification.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="createDonorProfile" element={<CreateDonorProfile />} />
      <Route path="home" element={<Home />}>
      <Route index element={<Navigate to="/DashBoard"/>} />
        <Route path="DashBoard" element={<Dashboard />} />
        <Route path="requests" element={<Requests />}>
          <Route path="assigned" element={<AssignedRequests />} />
          <Route path="accepted" element={<AcceptedRequests />} />
        </Route>
        <Route path="history" element={<DonationHistory/>}/>
        <Route path="notification" element={<Notification/>}/>
        <Route path="profile" element={<Profile/>}/>
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
