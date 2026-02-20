import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Citizen Pages
import CitizenDashboard from './pages/citizen/Dashboard';
import SubmitComplaint from './pages/citizen/SubmitComplaint';
import MyComplaints from './pages/citizen/MyComplaints';
import CitizenProfile from './pages/citizen/Profile';
import CitizenNotifications from './pages/citizen/Notifications';
import ComplaintDetails from './pages/citizen/ComplaintDetails';

// Officer Pages
import OfficerDashboard from './pages/officer/Dashboard';
import AssignedComplaints from './pages/officer/AssignedComplaints';
import UpdateStatus from './pages/officer/UpdateStatus';
import OfficerReports from './pages/officer/Reports';
import OfficerProfile from './pages/officer/Profile';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AllComplaints from './pages/admin/AllComplaints';
import ManageOfficers from './pages/admin/ManageOfficers';
import ManageCategories from './pages/admin/ManageCategories';
import Analytics from './pages/admin/Analytics';
import Escalations from './pages/admin/Escalations';
import SystemSettings from './pages/admin/SystemSettings';

function App() {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Citizen Routes */}
      <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
      <Route path="/citizen/submit-complaint" element={<SubmitComplaint />} />
      <Route path="/citizen/my-complaints" element={<MyComplaints />} />
      <Route path="/citizen/profile" element={<CitizenProfile />} />
      <Route path="/citizen/notifications" element={<CitizenNotifications />} />
      <Route path="/citizen/complaint/:id" element={<ComplaintDetails />} />

      {/* Officer Routes */}
      <Route path="/officer/dashboard" element={<OfficerDashboard />} />
      <Route path="/officer/assigned-complaints" element={<AssignedComplaints />} />
      <Route path="/officer/update-status" element={<UpdateStatus />} />
      <Route path="/officer/reports" element={<OfficerReports />} />
      <Route path="/officer/profile" element={<OfficerProfile />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/all-complaints" element={<AllComplaints />} />
      <Route path="/admin/manage-officers" element={<ManageOfficers />} />
      <Route path="/admin/manage-categories" element={<ManageCategories />} />
      <Route path="/admin/analytics" element={<Analytics />} />
      <Route path="/admin/escalations" element={<Escalations />} />
      <Route path="/admin/system-settings" element={<SystemSettings />} />
    </Routes>
  );
}

export default App;
