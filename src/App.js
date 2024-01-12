import "./App.css";
import { useReducer } from "react";
// import DatePicker from "./components/DatePicker";

const reducer = (state, action) => {
  if (action.type === "add") return { money: state.money + 10 };
  if (action.type === "take") return { money: state.money - 10 };
  return new Error();
};

//The dispatch function returned by useReducer lets you update the state to a different value and trigger a re-render. You need to pass the action as the only argument to the dispatch function:

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {" "}
      <div className="App">
        <h1> Wallet : {state.money}</h1>
        <div>
          <button onClick={() => dispatch({ type: "add" })}>
            {" "}
            Add money to wallet
          </button>
          <button onClick={() => dispatch({ type: "take" })}>
            {" "}
            Take money from wallet
          </button>
        </div>
      </div>
      {/* <DatePicker /> */}
    </>
      <p>Some new paragraph</p>
    </div>
  );
}

export default App;
