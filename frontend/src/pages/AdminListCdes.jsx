import NavBarAdmin from "@components/NavBarAdmin";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminListCdes() {
  const [shoplists, setShoplists] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/shoplistsDetails`)
      .then((response) => response.data)
      .then((data) => setShoplists(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="nav-bar-admin">
        <NavBarAdmin />
      </div>

      <h2>Recherche par numéro de commande : </h2>
      {/* <SearchBar searchValue={searchValue} handleSearchValue={setSearchValue} />
      {shoplists
        .filter((shoplist) => shoplist.includes(searchValue))
        .map((shoplist) => (
          <p>{shoplist}</p>
        ))}   */}
      <table>
        <thead>
          <tr>
            <th>Numéro de commande</th>
            <th>Date de commande</th>
            <th>Client</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          {shoplists &&
            shoplists.map((shoplist) => (
              <tr key={shoplist.id}>
                <td>{shoplist.order_number}</td>
                <td>{shoplist.date}</td>
                <td>
                  {shoplist.lastname} {shoplist.firstname}
                </td>
                <td>{shoplist.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminListCdes;
