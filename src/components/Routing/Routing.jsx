import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import LearningHub from "../../pages/LearningHub/LearningHub";

export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learninghub" element={<LearningHub />} />
      </Routes>
    </Router>
  );
}
