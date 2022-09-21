import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthAPI from "./services/AuthAPI";
import AuthContext from "./contexts/AuthContext";
import Form from "./components/Form";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import CategoryListDrinks from "./components/CategoryListDrinks";

import "./App.css";
import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";
import ChangeInfos from "./pages/ChangeInfos";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated
  );
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forms" element={<Form />} />
            <Route path="/profil/:id" element={<UserProfile />} />
            <Route path="/profil/:id/edit" element={<ChangeInfos />} />

            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/home/drinks" element={<CategoryListDrinks />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
