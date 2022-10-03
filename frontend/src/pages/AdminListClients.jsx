import NavBarAdmin from "@components/NavBarAdmin";
import axios from "axios";
import { useEffect, useState } from "react";

function AdminListClients() {
  const [clients, setClientslists] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/shoplistsDetails`)
      .then((response) => response.data)
      .then((data) => setClientslists(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="nav-bar-admin">
        <NavBarAdmin />
      </div>

      <h2>Recherche par ID de Client : </h2>
      {/* <SearchBar searchValue={searchValue} handleSearchValue={setSearchValue} />
      {shoplists
        .filter((shoplist) => shoplist.includes(searchValue))
        .map((shoplist) => (
          <p>{shoplist}</p>
        ))}   */}
      <table>
        <thead>
          <tr>
            <th>ID Client</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date De Naissance</th>
          </tr>
        </thead>
        <tbody>
          {clients &&
            clients.map((client) => (
              <tr key={client.id}>
                <td>{client.id}</td>
                <td>
                  {client.lastname} {client.firstname}
                </td>
                <td>{client.birthdate}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminListClients;
