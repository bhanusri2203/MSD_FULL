import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import Help from "./components/Help";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [cartItems, setCartItems] = useState([]); // ✅ Shared cart state

  // ✅ Keep login state updated across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      {/* ✅ Navbar visible on all pages, updates when logged in/out */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        {/* ✅ Public Routes */}
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/home" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to="/home" replace /> : <Signup />}
        />

        {/* ✅ Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/menu"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Menu cartItems={cartItems} setCartItems={setCartItems} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order-summary"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <OrderSummary />
            </ProtectedRoute>
          }
        />

        <Route
          path="/help"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Help />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <About />
            </ProtectedRoute>
          }
        />

        {/* ✅ Default Redirects */}
        <Route
          path="/"
          element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />}
        />
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
