import react, { act } from "react";

export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return { ...state, tickets: [...state.tickets, action.payload] };
    case "UPDATE_TICKET":
      return {
        ...state,
        tickets: state.tickets.map((ticket) =>
          ticket.id === action.payload.id ? action.payload : ticket
        ),
        editingTicket: null,
      };

    case "EDITING_TICKET":
      return {
        ...state,
        editingTicket: action.payload,
      };

      case "SET_SORTING":
        return{
          ...state,
          sortingPreference: action.payload
        }
    case "CLEAR_EDITING_TICKET":
      return {
        ...state,
        editingTicket: null,
      };
    case "DELETE_TICKET":
      if (state.editingTicket && state.editingTicket.id === action.payload) {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload
          ),
          editingTicket: null,
        };
      } else {
        return {
          ...state,
          tickets: state.tickets.filter(
            (ticket) => ticket.id !== action.payload
          ),
        };
      }
    default:
      return state;
  }
}
