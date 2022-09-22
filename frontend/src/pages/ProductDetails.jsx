import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`)
      .then((response) => response.data)
      .then((data) => setProductDetails(data));
  }, []);

  const savedShoplist = localStorage.getItem("shoplist");
  const [shoplist, setShoplist] = useState(
    savedShoplist ? JSON.parse(savedShoplist) : []
  );
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
      <div>{productDetails.name}</div>
      <div>{productDetails.description}</div>
      <div>
        <img src={productDetails.image} alt={productDetails.name} />
      </div>
      <div>{productDetails.price} €</div>
      <button
        type="button"
        onClick={() =>
          addToShoplist(
            productDetails.name,
            productDetails.price,
            productDetails.description,
            productDetails.image
          )
        }
      >
        Ajouter au panier
      </button>
      {/* <ButtonComponent name="Ajouter au panier" /> */}
      <button type="button" onClick={() => navigate(`/shoplists/`)}>
        Panier
      </button>
    </div>
  );
}
