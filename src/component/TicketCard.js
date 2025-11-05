import React from "react";
import "../styles.css";

export default function TicketCard({ ticket, dispatch }) {
  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };
  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}> </div>
      <h3> {ticket.title}</h3>
      <p> {ticket.description}</p>
      <button
        className="button"
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: ticket.id }) }
      >
        Delete
      </button>
      <button
        className="button"
        onClick={() => dispatch({ type: "EDITING_TICKET", payload: ticket })}
      >
        Edit
      </button>
    </div>
  );
}
