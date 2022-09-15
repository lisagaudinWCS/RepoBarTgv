import ProductsList from "@components/ProductsList";
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
        <ProductsList />
      </div>
      <div className="footerHome">
        <Footer />
      </div>
    </div>
  );
}
