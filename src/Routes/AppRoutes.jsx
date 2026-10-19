// import React from "react";
import {  Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Gallery from "../Components/Gallery";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};
