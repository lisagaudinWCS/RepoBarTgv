import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketPage from "@pages/TicketPage";

import Form from "./components/Form";
import Home from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/tickets" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
