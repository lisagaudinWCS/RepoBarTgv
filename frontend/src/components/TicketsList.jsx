import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Ticket from "./Ticket";
import NavBarTickets from "./NavBarTickets";
// import banbg from "../assets/banbg.jpg";
import "./connexion.css";
import HeaderProfile from "./HeaderProfile";

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
      <HeaderProfile />
      {/* <div className="img-header-profile">
        <img src={banbg} alt="beaugossedansunegare" />
      </div> */}
      <div className="nav-bar-home">
        <NavBarTickets />
      </div>
      <h2 className="trajets">Mes Trajets & Commandes</h2>
      {tickets &&
        tickets.map((ticket) => (
          <Link to={`/tickets/${ticket.id}`} key={ticket.id}>
            <Ticket ticket={ticket} />
          </Link>
        ))}
      {/* <div className="footer-home">
        <Footer /> */}
      {/* </div> */}
    </div>
  );
}
