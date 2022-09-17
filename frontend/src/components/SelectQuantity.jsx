import "./shoplistDetails.css";

export default function SelectQuantity({ quantity, setQuantity }) {
  return (
    <div>
      <input
        type="button"
        id="min"
        className="ajust-quantity"
        value="-"
        onClick={() => {
          return quantity === 1 ? 1 : setQuantity(quantity - 1);
        }}
      />
      <input
        className="show-quantity"
        id="result"
        type="text"
        min="1"
        value={quantity}
        // onChange={(e) => setPriceProduct(e.target.value)}
        maxLength="2"
      />
      <input
        id="more"
        className="ajust-quantity"
        type="button"
        value="+"
        onClick={() => {
          setQuantity(quantity + 1);
        }}
      />
    </div>
  );
}
