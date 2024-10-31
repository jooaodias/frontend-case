import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from "../../pages/Todo";
import { IBanking } from "../../pages/IBanking";
import Home from "../../pages/Home/Home";

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/login" element={<IBanking />} />
      </Routes>
    </BrowserRouter>
  );
};
