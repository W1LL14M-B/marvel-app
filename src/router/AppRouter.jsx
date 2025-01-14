import React from "react";
import Navbar from "../componentes/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Marvel from "../pages/Marvel";
import Search from "../pages/Search";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
};

export default AppRouter;
