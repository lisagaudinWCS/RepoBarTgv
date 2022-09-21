export default function TotalOrder({ total }) {
  return (
    <div className="box-container-shoplist">
      {parseInt(total, 10) !== 0 ? (
        <div className="total-container">
          <p className="total-order">Total Commande : </p>
          <p className="total-number">{total} €</p>
        </div>
      ) : (
        <div className="empty-cart">Votre pannier est vide</div>
      )}
    </div>
  );
}
