import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Subscribe from "./pages/Subscribe";
import ShoplistPage from "./pages/ShoplistPage";
import Form from "./components/Form";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import SendOrder from "./pages/SendOrder";

import "./App.css";
import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";

import "./pages/shoplistPage.css";
import "./components/shoplistDetails.css";

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
          <Route path="/shoplists/" element={<ShoplistPage />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/sendorder" element={<SendOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
