import { Link } from "react-router-dom";

export default function Element({ id, name, price, image, description }) {
  return (
    <div className="container-element">
      <Link to={`/productdetails/${id}`}>
        <div className="container-image">
          <img className="picture" src={image} alt={name} />
        </div>
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
        <div className="product-price">{price.split(".").join(",")} €</div>
      </Link>
    </div>
  );
}
