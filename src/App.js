import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Ticketform from "./component/Ticketform";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./component/TicketList";
import { sortingUtility } from "./utilities/sortingUtility";
import { useEffect, useReducer } from "react";

function App() {
  const initialState = {
    tickets: [],
    editingTicket: null,
    sortingPreference: "high to low",
  };
  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedtTickets = sortingUtility(state.tickets, state.sortingPreference);

  return (
    <div className="App">
      <div className="container">
        <h1> Bug Blaster </h1>
        <Ticketform
          state={state}
          dispatch={dispatch}
          editingTicket={state.editingTicket}
        ></Ticketform>
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select
              value={state.sortingPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value="low to high"> low to high </option>
              <option value="high to low"> high to low </option>
            </select>
            <TicketList
              tickets={sortedtTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
