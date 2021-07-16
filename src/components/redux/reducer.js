const initialState = false;

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "show":
      return (state = true);
    case "hide":
      return (state = false);
    default:
      return state;
  }
};
