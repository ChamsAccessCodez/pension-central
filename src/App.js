import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Onboarding from "../src/components/onboarding/Onboarding";
import Dashboard from "../src/components/dashboard/parentScreen/ParentScreen";
import ResetPassword from "../src/components/resetPassword/ResetPassword";
import PasswordReset from "../src/components/dashboard/navRoutes/PasswordResetRoute"
import UploadSchedules from "./components/dashboard/navRoutes/UploadRoute";
import UnsubmittedSchedules from "./components/dashboard/navRoutes/UnsubmittedRoute";
import SubmittedSchedules from "./components/dashboard/navRoutes/SubmittedRoute";
import Reports from "./components/dashboard/navRoutes/ReportRoute";
import PrivateRoute from "./components/dashboard/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/password-reset"
          element={
            <PrivateRoute>
              <PasswordReset />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/reset-password"
          element={
            <PrivateRoute>
              <ResetPassword />
            </PrivateRoute>
          }
        /> */}
        <Route
          path="/upload-schedules"
          element={
            <PrivateRoute>
              <UploadSchedules />
            </PrivateRoute>
          }
        />
        <Route
          path="/unsubmitted-schedules"
          element={
            <PrivateRoute>
              <UnsubmittedSchedules />
            </PrivateRoute>
          }
        />
        <Route
          path="/submitted-schedules"
          element={
            <PrivateRoute>
              <SubmittedSchedules />
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <Reports />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
