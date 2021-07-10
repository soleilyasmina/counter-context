export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "make-millionaire":
      return state + 1000000;
    default:
      return state;
  }
};
