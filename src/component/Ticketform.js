import React, { useEffect, useState } from "react";
import "../styles.css";
import { clear } from "@testing-library/user-event/dist/clear";

export default function Ticketform({ state, dispatch, editingTicket }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("1");

  console.log(editingTicket);
  useEffect(() => {
    if (editingTicket) {
      setTitle(editingTicket.title);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
    } else {
      clearForm();
    }
  }, [editingTicket]);

  const priorityLabels = {
    1: "Low",
    2: "Medium",
    3: "High",
  };

  const clearForm = () => {
    setTitle("");
    setDescription("");
    setPriority("1");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketData = {
      id: editingTicket ? editingTicket.id : new Date().toISOString(),
      title,
      description,
      priority,
    };
    dispatch({
      type: editingTicket ? "UPDATE_TICKET" : "ADD_TICKET",
      payload: ticketData,
    });

    const handleCancel = (e) => {
      e.preventDefault();
      dispatch({
        type: "CLEAR_EDITING_TICKET",
        payload: editingTicket,
      });

      clearForm();
    };
    console.log(state);

    clearForm();
  };
  return (
    <form className="ticket-form" onSubmit={handleSubmit}>
      <div>
        <label> Title </label>
        <input
          type="text"
          className="form-input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <label> Description </label>
        <textarea
          type="text"
          className="form-input"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <fieldset className="priority-fieldset">
        <legend> Priority </legend>

        {Object.entries(priorityLabels).map(([key, value]) => (
          <label key={key} className="priority-label">
            <input
              type="radio"
              name="priority"
              value={key}
              checked={priority === key}
              onChange={(e) => {
                setPriority(e.target.value);
              }}
            />
            {value}
          </label>
        ))}
      </fieldset>
      <button className="button"> Submit </button>
      {editingTicket && <button className="button">Cancel Edit</button>}
    </form>
  );
}
