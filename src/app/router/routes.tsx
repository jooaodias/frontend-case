import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import { TodoPage, IBanking } from "../../pages";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/login" element={<IBanking />} />
      </Routes>
    </BrowserRouter>
  );
};
