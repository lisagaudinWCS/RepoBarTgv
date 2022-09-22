// import Ticket from "@components/Tickets";
import TicketsList from "@components/TicketsList";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

export default function TicketPage() {
  // const [ticket, setTicket] = useState("");

  // const params = useParams();

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_BACKEND_URL}/tickets/${params.id}`)
  //     .then((response) => response.data)
  //     .then((data) => setTicket(data));
  // }, []);

  return (
    <div className="container-ticket-page">
      <h2>Mes Trajets & Commandes</h2>
      <TicketsList />
    </div>
  );
}
