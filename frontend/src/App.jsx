import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "@pages/HomePage";
import HeaderHome from "@components/HeaderHome";
import AuthAPI from "./services/AuthAPI";
import AuthContext from "./contexts/AuthContext";
import Form from "./components/Form";
import Subscribe from "./pages/Subscribe";
import ShoplistPage from "./pages/ShoplistPage";
import ProductDetails from "./pages/ProductDetails";
import SendOrder from "./pages/SendOrder";
import CategoryListDrinks from "./components/CategoryListDrinks";
import CancelOrder from "./pages/CancelOrder";
import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";
import ChangeInfos from "./pages/ChangeInfos";

import "./App.css";
import "./pages/homePage.css";
import "./pages/shoplistPage.css";
import "./components/shoplistDetails.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated
  );
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Router>
        <div>
          <HeaderHome />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forms" element={<Form />} />
            <Route path="/profil/:id" element={<UserProfile />} />
            <Route path="/profil/:id/edit" element={<ChangeInfos />} />

            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/login" element={<Connexion />} />
            <Route path="/shoplists/" element={<ShoplistPage />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/sendorder" element={<SendOrder />} />
            <Route path="/home/drinks" element={<CategoryListDrinks />} />
            <Route path="/cancelorder" element={<CancelOrder />} />
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
