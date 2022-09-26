import React from "react";
import { transBirthDate } from "@services/DateManager";
import "./Ticket.css";

export default function Ticket({ ticket }) {
  const travelDate = transBirthDate(ticket.date);

  const departureTime = ticket.departure_time.split(":");
  const res = `${departureTime[0]}h${departureTime[1]}`;
  const arrivalTime = ticket.arrival_time.split(":");
  const result = `${arrivalTime[0]}h${arrivalTime[1]}`;

  return (
    <div className="ticket-container">
      <div className="travel-date">
        <p>{travelDate}</p>
      </div>
      <div className="detals-travel">
        <div className="detals-time">
          <div className="departure-time">
            <p>{res}</p>
            <div className="arrival-time">
              <p>{result}</p>
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
