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

  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(name, price) {
    const currentProductAdded = cart.find((product) => product.name === name);
    if (currentProductAdded) {
      const cartFilteredCurrentProduct = cart.filter(
        (product) => product.name !== name
      );
      setCart([
        ...cartFilteredCurrentProduct,
        { id, name, price, amount: currentProductAdded.amount + 1 },
      ]);
    } else {
      setCart([...cart, { id, name, price, amount: 1 }]);
    }
  }

  return (
    <div>
      <div>{productDetails.name}</div>
      <div>{productDetails.description}</div>
      <div>{productDetails.price} €</div>
      <div>
        <img src={productDetails.image} alt="" />
      </div>
      <button
        type="button"
        onClick={() => addToCart(productDetails.name, productDetails.price)}
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
