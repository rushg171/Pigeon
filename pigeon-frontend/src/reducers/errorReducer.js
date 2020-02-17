import PROCEDURE from "../constants";

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case PROCEDURE.LOAD_FAIL:
      return action.error;
    case PROCEDURE.LOAD:
      return null;
    case PROCEDURE.LOAD_SUCCESS:
      return false;
    default:
      return null;
  }
};

export default errorReducer;
