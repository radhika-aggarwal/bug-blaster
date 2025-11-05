import React from "react";
import TicketCard from "./TicketCard";
import "../styles.css";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          dispatch={dispatch}
        ></TicketCard>
      ))}
    </div>
  );
}
