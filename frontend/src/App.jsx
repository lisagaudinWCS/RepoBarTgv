import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subscribe from "./pages/Subscribe";
import ShoplistPage from "./pages/ShoplistPage";
import Form from "./components/Form";
import Home from "./pages/Home";

import "./App.css";
import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/profil/:id" element={<UserProfile />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/login" element={<Connexion />} />
          <Route path="/shoplists/:id" element={<ShoplistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
