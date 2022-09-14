import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoplistPage from "./pages/ShoplistPage";
import Form from "./components/Form";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/shoplists/:id" element={<ShoplistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
