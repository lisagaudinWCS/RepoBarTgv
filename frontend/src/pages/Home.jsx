import CategoryListForm from "@components/CategoryListForm";
import CategoryListCold from "@components/CategoryListCold";
import CategoryListHot from "@components/CategoryListHot";
import CategoryListDesserts from "@components/CategoryListDesserts";
import CategoryListDrinks from "@components/CategoryListDrinks";

import Header from "@components/Header";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import NavBarMobile from "@components/NavBarMobile";
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
        <NavBarMobile />
      </div>
      <div className="productListHome">
        <div className="formules">
          <div className="art">
            <h2>Formules</h2>
          </div>
          <div>
            <CategoryListForm />{" "}
          </div>
        </div>
        <div className="cold">
          <h2>Plats Froids</h2>
          <div>
            <CategoryListCold />{" "}
          </div>
        </div>
        <div className="hot">
          <h2>Plats Chauds</h2>
          <div>
            <CategoryListHot />
          </div>
        </div>

        <div className="desserts">
          <h2>Desserts</h2>
          <div>
            <CategoryListDesserts />{" "}
          </div>
        </div>
        <div className="drinks">
          <h2>Boissons</h2>
          <div>
            <CategoryListDrinks />{" "}
          </div>
        </div>
      </div>
      <div className="footerHome">
        <Footer />
      </div>
    </div>
  );
}
