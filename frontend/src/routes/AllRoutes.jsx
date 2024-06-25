import React from "react";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Map } from "../pages/Map";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
};

export { AllRoutes };
