import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Reserve from './pages/Reserve';
import Pricing from './pages/Pricing';
import HowItWorks from './pages/HowItWorks';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      {/* Navigation */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">Reservely</div>
        <div className="space-x-4 text-blue-600">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/reserve" className="hover:underline">Reserve</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/how-it-works" className="hover:underline">How It Works</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/login" className="hover:underline">Sign In</Link>
          <Link to="/signup" className="hover:underline">Sign Up</Link>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/reserve"
          element={
            <ProtectedRoute>
              <Reserve />
            </ProtectedRoute>
          }
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
