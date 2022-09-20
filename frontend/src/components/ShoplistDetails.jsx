import deleteIcon from "../assets/delete.png";

import "./shoplistDetails.css";

export default function ShoplistDetails({
  name,
  price,
  amount,
  imageCart,
  description,
  id,
  handleAmount,
  deleteProduct,
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
        <div className="container-quantity">
          <input
            type="button"
            id="small"
            className="ajust-quantity"
            value="-"
            onClick={() => {
              return amount === 1 ? 1 : handleAmount(id, amount - 1);
            }}
          />
          <input
            type="text"
            className="show-quantity"
            min="1"
            value={amount}
            readOnly
          />
          <input
            id="more"
            className="ajust-quantity"
            type="button"
            value="+"
            onClick={() => {
              handleAmount(id, amount + 1);
            }}
          />
        </div>
        <div className="delete-ico">
          <button
            type="button"
            className="button-delete"
            onClick={() => deleteProduct(id)}
          >
            <img src={deleteIcon} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
