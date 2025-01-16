import React from "react";
import Navbar from "../componentes/Navbar";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../hooks/AutoContex";

const AppRouter = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/marvel" /> : <LoginPage/>}
        />

        <Route path="/marvel" element={<Marvel />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default AppRouter;
