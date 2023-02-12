import "./App.css";
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "add") return { money: state.money + 10 };
  if (action.type === "take") return { money: state.money - 10 };
  return new Error();
};

function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
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
  );
}

export default App;
