import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";

import "./App.css";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Connexion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
