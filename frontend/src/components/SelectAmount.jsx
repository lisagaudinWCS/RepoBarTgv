import "./shoplistDetails.css";

export default function SelectQuantity({ handleAmount, amount, id }) {
  return (
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
  );
}
