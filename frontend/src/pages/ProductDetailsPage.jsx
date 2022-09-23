import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ShoplistContext from "../context/ShoplistContext";

import ProductDetails from "../components/ProductDetails";

export default function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((response) => response.data)
      .then((data) => setProductDetails(data));
  }, []);

  const { shoplist, setShoplist } = useContext(ShoplistContext);

  useEffect(() => {
    localStorage.setItem("shoplist", JSON.stringify(shoplist));
  }, [shoplist]);

  function addToShoplist(name, price, description, image) {
    const currentProductAdded = shoplist.find(
      (product) => product.name === name
    );
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = shoplist.filter(
        (product) => product.name !== name
      );
      setShoplist([
        ...cartFilteredCurrentProduct,
        {
          id,
          name,
          price,
          image,
          description,
          amount: currentProductAdded.amount + 1,
        },
      ]);
    } else {
      setShoplist([
        ...shoplist,
        { id, name, price, description, image, amount: 1 },
      ]);
    }
  }

  return (
    <div>
      <div className="container-title-menu">
        <h1 className="title-menu-blue">Description</h1>
      </div>
      <ProductDetails
        name={productDetails.name}
        description={productDetails.description}
        image={productDetails.image}
        price={productDetails.price}
        addToShoplist={() =>
          addToShoplist(
            productDetails.name,
            productDetails.price,
            productDetails.description,
            productDetails.image
          )
        }
      />
    </div>
  );
}
