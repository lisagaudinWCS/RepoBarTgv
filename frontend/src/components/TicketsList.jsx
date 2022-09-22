import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ticket from "./Ticket";

export default function TicketsList() {
  const [tickets, setTickets] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/trainsTicketsClients`)
      .then((response) => response.data)
      .then((data) => setTickets(data));
  }, []);

  return (
    <div>
      <div className="img-header-profile">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1663166464/pexels-andrea-piacquadio-3839219_rojpxd.jpg"
          alt="beaugossedansunegare"
        />
      </div>
      {tickets &&
        tickets.map((ticket) => (
          <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
            <Ticket ticket={ticket} />
          </Link>
        ))}
    </div>
  );
}
