import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import HeaderHome from "@components/HeaderHome";
import Subscribe from "./pages/Subscribe";
import ShoplistPage from "./pages/ShoplistPage";
import Form from "./components/Form";
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
  return (
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
  );
}

export default App;
