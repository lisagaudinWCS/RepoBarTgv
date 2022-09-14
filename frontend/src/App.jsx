import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./pages/Home";
import "./App.css";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<Form />} />
          <Route path="/profil/:id" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
