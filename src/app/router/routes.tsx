import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TodoPage, IBanking, Home } from "../../pages";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/banking" element={<IBanking />} />
      </Routes>
    </BrowserRouter>
  );
};
