import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import GeoPage from "./pages/GeoPage";
import CausePage from "./pages/CausePage";
import PolicyPage from "./pages/PolicyPage";
import CorrelationMatrix from "./pages/CorrelationMatrix";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/correlation-matrix" element={<CorrelationMatrix />} />
        <Route path="/geo" element={<GeoPage />} />
        <Route path="/cause" element={<CausePage />} />
        <Route path="/policy" element={<PolicyPage />} />
      </Routes>
    </Router>
  );
}

export default App;




// Inside <Routes>

