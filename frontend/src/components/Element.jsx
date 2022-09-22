export default function Element({ name, price, image }) {
  return (
    <div className="container-element">
      <div className="container-image">
        <img className="picture" src={image} alt={name} />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">{price} €</div>
    </div>
  );
}
