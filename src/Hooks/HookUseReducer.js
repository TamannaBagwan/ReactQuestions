import React, { useReducer } from "react";
const HookUseReducer = () => {
  const initialState = {
    count: 10,
  };
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1> Count  : {state.count} </h1>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default HookUseReducer;
