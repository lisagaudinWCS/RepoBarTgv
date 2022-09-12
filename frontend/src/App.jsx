import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./pages/Home";
import "./App.css";
import Subscribe from "./pages/Subscribe";

function App() {
  return (
    <Router>
      <div>
        <Subscribe />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
