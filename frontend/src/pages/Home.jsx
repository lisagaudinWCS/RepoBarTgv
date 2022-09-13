import ProductsList from "@components/ProductsList";
import Header from "@components/Header";
import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import Ban from "@components/Ban";

export default function Home() {
  return (
    <div className="containerHome">
      <div className="headerHome">
        <Header />
      </div>
      <div className="ban">
        <Ban />
      </div>
      <div className="navBar">
        <NavBar />
      </div>
      <div className="productList">
        <ProductsList />
      </div>
      <div className="footerHome">
        <Footer />
      </div>
    </div>
  );
}
