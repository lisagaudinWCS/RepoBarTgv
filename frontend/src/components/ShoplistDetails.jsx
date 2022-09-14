import SelectQuantity from "./SelectQuantity";

import "./shoplistDetails.css";

export default function ShoplistDetails({ shoplistElements }) {
  return (
    <div className="box-container-shoplist">
      <div className="container-shoplist-element">
        <p className="shoplist-description">{shoplistElements.name}</p>
        <p className="shoplist-price">{shoplistElements.price} €</p>
        <div className="container-quantity">
          <SelectQuantity />
        </div>
      </div>
    </div>
  );
}
