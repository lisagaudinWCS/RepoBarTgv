import React from "react";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  return (
    <div className="ticket-container">
      <div className="travel-date">
        <p>{ticket.date}</p>
      </div>
      <div className="detals-travel">
        <div className="detals-time">
          <div className="departure-time">
            <p>{ticket.departure_time}</p>
            <div className="arrival-time">
              <p>{ticket.arrival_time}</p>
            </div>
          </div>
        </div>
        <div className="detals-train">
          <div className="train-number">
            <p>train N° {ticket.train_number} Numero</p>
          </div>
          <div className="depart-from">
            <p>Départ : {ticket.dep_from}</p>
          </div>
          <div className="arrival-to">
            <p>Arrivée : {ticket.arr_to}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
