import { useContext } from "react";
import { Context } from "../context";

const Counter = () => {
  const { count, dispatch } = useContext(Context);
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "make-millionaire" })}>$</button>
    </div>
  )
};

export default Counter;
