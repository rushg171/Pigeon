import PROCEDURE from "../constants";

const deleteByIdReducer = (state = [], action) => {
  switch (action.type) {
    case PROCEDURE.DELETE:
      return { id: action.payload };
    default:
      return state;
  }
};

export default deleteByIdReducer;
