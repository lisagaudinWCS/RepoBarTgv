import React from "react";
import "./Ticket.css";
import Footer from "@components/Footer";
import NavBarTickets from "./NavBarTickets";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket-container">
      <div className="navBarHome">
        <NavBarTickets />
      </div>
      <div className="travelDate">
        <p>{ticket.date}</p>
      </div>
      <div className="DetalsTravel">
        <div className="DetalsTime">
          <div className="DepartureTime">
            <p>{ticket.departure_time}</p>
            <div className="ArrivalTime">
              <p>{ticket.arrival_time}</p>
            </div>
          </div>
        </div>
        <div className="DetalsTrain">
          <div className="TrainNumber">
            <p>train N° {ticket.train_number} Numero</p>
          </div>
          <div className="DepartFrom">
            <p>Départ : {ticket.dep_from}</p>
          </div>
          <div className="ArrivalTo">
            <p>Arrivée : {ticket.arr_to}</p>
          </div>
        </div>
      </div>
      <div className="footerHome">
        <Footer />
      </div>
    </div>
  );
}
