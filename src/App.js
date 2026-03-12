import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import TalkCustomer from "./pages/TalkCustomer";
import DealClinic from "./pages/DealClinic";
import Performance from "./pages/Performance";
import CustomerReport from "./pages/CustomerReport";
import DealReport from "./pages/DealReport";
import CustomerSessionReport from "./pages/CustomerSessionReport";
import DealClinicSessionReport from "./pages/DealClinicSessionReport";

import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/talk"
          element={
            <ProtectedRoute>
              <TalkCustomer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/clinic"
          element={
            <ProtectedRoute>
              <DealClinic />
            </ProtectedRoute>
          }
        />

        <Route
          path="/performance"
          element={
            <ProtectedRoute>
              <Performance />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer-report"
          element={
            <ProtectedRoute>
              <CustomerReport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/deal-report"
          element={
            <ProtectedRoute>
              <DealReport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer-session-report"
          element={
            <ProtectedRoute>
              <CustomerSessionReport />
            </ProtectedRoute>
          }
        />

        <Route
          path="/deal-session-report"
          element={<ProtectedRoute>
            <DealClinicSessionReport />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;