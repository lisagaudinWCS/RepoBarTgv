import CategoryListForm from "@components/CategoryListForm";
import CategoryListCold from "@components/CategoryListCold";

import Header from "@components/Header";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Ban from "@components/Ban";
import "./Home.css";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="headerHome">
        <Header />
      </div>
      <div className="banHome">
        <Ban />
      </div>
      <div className="navBarHome">
        <NavBar />
      </div>
      <div className="productListHome">
        <div className="formules">
          <h2>coucou</h2>
        </div>
        <div>
          {" "}
          <CategoryListForm />{" "}
        </div>
        <div className="platsFroids">
          <h2>Plats Froids</h2>
        </div>
        <div>
          <CategoryListCold />{" "}
        </div>
        <div />
      </div>
      <div className="footerHome">
        <Footer />
      </div>
    </div>
  );
}
