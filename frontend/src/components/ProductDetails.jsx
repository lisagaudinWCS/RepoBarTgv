import { useNavigate } from "react-router-dom";

export default function ProductDetails({
  name,
  description,
  image,
  price,
  addToShoplist,
}) {
  const navigate = useNavigate();

  return (
    <div className="container-product-details">
      <div className="image-description">
        <img src={image} alt={name} />
      </div>
      <div className="container-description">
        <div className="name-description">{name}</div>
        <div className="description-description">{description}</div>
        <div className="price-description">{price} €</div>
        <div className="container-button-description">
          <button
            className="validate-button"
            type="button"
            onClick={() => addToShoplist(name, price, description, image)}
          >
            Ajouter au panier
          </button>
          {/* <ButtonComponent name="Ajouter au panier" /> */}
          <button
            className="validate-button"
            type="button"
            onClick={() => navigate(`/shoplists/`)}
          >
            Panier
          </button>
        </div>
      </div>
    </div>
  );
}
