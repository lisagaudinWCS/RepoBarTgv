import { useState } from "react";

import "./shoplistDetails.css";

export default function SelectQuantity() {
  const [quantityValue, setQuantityValue] = useState(1);
  return (
    <div>
      <input
        type="button"
        id="min"
        className="ajust-quantity"
        value="-"
        onClick={() => {
          return quantityValue === 1 ? 1 : setQuantityValue(quantityValue - 1);
        }}
      />
      <input
        className="show-quantity"
        id="result"
        type="text"
        min="1"
        value={quantityValue}
        maxLength="2"
      />
      <input
        id="more"
        className="ajust-quantity"
        type="button"
        value="+"
        onClick={() => {
          setQuantityValue(quantityValue + 1);
        }}
      />
    </div>
  );
}
