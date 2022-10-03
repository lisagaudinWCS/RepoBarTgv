import NavBarAdmin from "@components/NavBarAdmin";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminListProducts() {
  const [Products, setProducts] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/productsDetails`)
      .then((response) => response.data)
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="nav-bar-admin">
        <NavBarAdmin />
      </div>

      <h2>Recherche par référence produit : </h2>
      <table>
        <thead>
          <tr>
            <th>Ref Produit</th>
            <th>Nom</th>
            <th>Catégorie</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {Products &&
            Products.map((Product) => (
              <tr key={Product.id}>
                <td>{Product.name}</td>
                {/* <td>{category.name}</td> */}
                <td>{Product.Price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminListProducts;
