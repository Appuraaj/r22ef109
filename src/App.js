import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RedirectPage from "./pages/Redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:shortCode" element={<RedirectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
