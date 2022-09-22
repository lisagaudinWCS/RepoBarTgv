import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import TicketPage from "@pages/TicketPage";
import TicketsList from "./components/TicketsList";
import Form from "./components/Form";
import Home from "./pages/Home";
import Subscribe from "./pages/Subscribe";
import CategoryListDrinks from "./components/CategoryListDrinks";

import UserProfile from "./pages/UserProfile";
import Connexion from "./pages/Connexion";

import "./App.css";

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
          <Route path="/home/drinks" element={<CategoryListDrinks />} />
          <Route path="/home/tickets" element={<TicketsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
