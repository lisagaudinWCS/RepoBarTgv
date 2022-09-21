import SelectAmount from "./SelectAmount";

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
        <SelectAmount
          handleAmount={handleAmount}
          amount={amount}
          deleteIcon={deleteIcon}
          id={id}
        />
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
