import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Admin from './components/Admin.jsx';
import Test from './components/Test.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import DashBoard from './components/DashBoard.jsx';
import Spend from './components/Spend.jsx';
import Addcause from './components/Addcause.jsx';
import Donate from './components/Donate.jsx';
import { UserProvider } from './UserContext.jsx'; // Import the UserProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/adminsign" element={<Admin />} />
          <Route path="/test" element={<Test />} />
          <Route path="/dash" element={<DashBoard />} />
          <Route path="/spend" element={<Spend />} />
          <Route path="/addcause" element={<Addcause />} />
          <Route path="/donate/:causeId" element={<Donate />} />
        </Routes>
      </Router>
    </UserProvider>
  </React.StrictMode>
);
