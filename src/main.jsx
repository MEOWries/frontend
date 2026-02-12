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
import LandingPage from "./pages/LandingPage.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import CreateDonorProfile from "./pages/DonorProfileCreation.jsx";
import { MyContextProvider } from "./utils/GlobalContext.jsx";
import Requests from "./pages/Request_Donor/Requests.jsx";
import AssignedRequests from "./pages/Request_Donor/AssignedRequests.jsx";
import AcceptedRequests from "./pages/Request_Donor/AcceptedRequests.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/createDonorProfile" element={<CreateDonorProfile />} />
      <Route path="/dashboard" element={<Dashboard/>}>
        <Route path="/dashboard/requests" element={<Requests />}>
          <Route path="/requests/assigned" element={<AssignedRequests />} />
          <Route path="/requests/accepted" element={<AcceptedRequests />} />
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
