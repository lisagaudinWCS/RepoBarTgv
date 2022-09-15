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
      {tickets &&
        tickets.map((ticket) => (
          <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
            <Ticket ticket={ticket} />
          </Link>
        ))}
    </div>
  );
}
