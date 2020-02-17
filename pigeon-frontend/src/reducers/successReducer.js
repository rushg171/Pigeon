import PROCEDURE from "../constants";

const successReducer = (state = [], action) => {
  if (action.type === PROCEDURE.LOAD_SUCCESS) {
    return [...action.payload];
  }
  return state;
};

export default successReducer;
