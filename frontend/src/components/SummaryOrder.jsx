export default function SummaryOrder({
  name,
  imageCart,
  description,
  price,
  amount,
}) {
  return (
    <div className="box-container-shoplist">
      <div className="container-shoplist-element">
        <div className="shoplist-image">
          <img src={imageCart} alt={name} />
        </div>
        <p className="shoplist-name">{name}</p>
        <p className="shoplist-description">{description}</p>
        <p className="shoplist-price">{price} €</p>
        <p className="shoplist-amount">{amount}</p>
      </div>
    </div>
  );
}
