/* eslint-disable react/jsx-no-constructed-context-values */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "@pages/HomePage";
import HeaderHome from "@components/HeaderHome";
import TicketPage from "@pages/TicketPage";
import Footer from "@components/Footer";
import BothIdentificationPage from "@pages/BothIdentificationPage";
import AuthAPI from "./services/AuthAPI";
import AuthContext from "./contexts/AuthContext";
import FormPage from "./pages/FormPage";
import Subscribe from "./pages/Subscribe";
import ShoplistPage from "./pages/ShoplistPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SendOrder from "./pages/SendOrder";
import CancelOrder from "./pages/CancelOrder";
import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";
import ChangeInfos from "./pages/ChangeInfos";
import SendOrderFinito from "./pages/SendOrderFinito";
import DeleteClientPage from "./pages/DeleteClientPage";
import SubscribeConfirmPage from "./pages/SubscribeConfirmPage";

import ShoplistContext from "./context/ShoplistContext";

import "./App.css";
import "./pages/homePage.css";
import "./pages/shoplistPage.css";
import "./components/shoplistDetails.css";
import "./components/connexion.css";
import "./components/productDetails.css";

function App() {
  const savedShoplist = localStorage.getItem("shoplist");
  const [shoplist, setShoplist] = useState(
    savedShoplist ? JSON.parse(savedShoplist) : []
  );
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthAPI.isAuthenticated
  );
  return (
    <ShoplistContext.Provider value={{ shoplist, setShoplist }}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Router>
          <div>
            <HeaderHome />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/forms" element={<FormPage />} />
              <Route path="/profil/:id" element={<UserProfile />} />
              <Route path="/profil/:id/edit" element={<ChangeInfos />} />
              <Route path="/subscribe" element={<Subscribe />} />
              <Route path="/login" element={<Connexion />} />
              <Route path="/signin" element={<BothIdentificationPage />} />
              <Route path="/shoplists/" element={<ShoplistPage />} />
              <Route path="/ticket/" element={<TicketPage />} />

              <Route
                path="/productdetails/:id"
                element={<ProductDetailsPage />}
              />
              <Route path="/sendorder" element={<SendOrder />} />
              <Route path="/cancelorder" element={<CancelOrder />} />
              <Route path="/orderfinito" element={<SendOrderFinito />} />
              <Route
                path="/profil/deleteclient"
                element={<DeleteClientPage />}
              />
              <Route
                path="/subscribe/createdprofile"
                element={<SubscribeConfirmPage />}
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthContext.Provider>
    </ShoplistContext.Provider>
  );
}

export default App;
