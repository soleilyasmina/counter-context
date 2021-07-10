import { createContext, useReducer } from "react";
import { reducer } from "../reducers";

export const Context = createContext();
Context.displayName = "CounterContext";

export const Provider = ({ children }) => {
  const [count, dispatch] = useReducer(reducer, 0);

  const contextValue = {
    count,
    dispatch,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};
