import React from "react";

import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Map } from "../pages/Map";
import { ErrorPage } from "../pages/ErrorPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<Map />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { AllRoutes };
