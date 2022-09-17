import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ShoplistDetails from "../components/ShoplistDetails";

import "./shoplistPage.css";

export default function ShoplistPage() {
  const { id } = useParams();

  const [shoplistElements, setShoplistElement] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/shoplistelem/${id}}`)
      .then((response) => response.data)
      .then((data) => setShoplistElement(data));
  }, []);

  // let totalPrice = 0;

  // // // eslint-disable-next-line no-unused-vars
  // const shoplistPrice =
  //   shoplistElements &&
  //   shoplistElements.forEach((element) => {
  //     totalPrice += parseFloat(element.price);
  //     setTotal(totalPrice);
  //   });

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Ma commande</h1>;
      </div>
      <h2>Mon panier</h2>
      {shoplistElements &&
        shoplistElements.map((element) => (
          <ShoplistDetails key={element.id} shoplistElements={element} />
        ))}
      {/* <TotalOrder total={total} /> */}
    </div>
  );
}
