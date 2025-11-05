import { useState } from "react";
// function ticketSetter(state, action) {
//   switch (action.type) {
//     case "ADD_TICKET":
//       return { ...state, tickets: [...state.tickets, action.payload] };
//     case "UPDATE_TICKET":
//       return {
//         ...state,
//         tickets: state.tickets.map((ticket) =>
//           action.payload === ticket.id ? action.payload : ticket
//         ),
//       };
//     case "DELETE_TICKET":
//       return {
//         ...state,
//         tickets: state.tickets.filter((ticket) => ticket.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }
export default function useReducer1(reducer, initialstate) {
  //  const initialState = { tickets: [] };
  // const [state, dispatch] = useReducer(ticketReducer, initialState);

  const [state, setState] = useState(initialstate);

  const dispatch = (action) => {
    const newstate = reducer(state, action);
    setState(newstate);
  };

  return [state, dispatch];
}
