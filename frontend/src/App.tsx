// App.js

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import PredictiveAnalytics from './pages/PredictiveAnalytics';
import Alerts from './pages/Alerts';
import Reports from './pages/Reports';
import ScenarioAnalysis from './pages/ScenarioAnalysis';
import SmartDevices from './pages/SmartDevices';
// import ProtectedRoute from './components/auth/ProtectedRoute';
import PricingSection from './pages/Pricing';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Sync token state with localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/features" element={<Features />} />
        <Route path='/pricing' element={<PricingSection />} />

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute />}>  Wrap protected routes */}
          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="analytics" element={<PredictiveAnalytics />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="reports" element={<Reports />} />
            <Route path="scenarios" element={<ScenarioAnalysis />} />
            <Route path="devices" element={<SmartDevices />} />
          </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
