import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "@pages/HomePage";
import TicketPage from "./pages/TicketPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tickets" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
