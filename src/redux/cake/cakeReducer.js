import { BUY_CAKE, SET_CAKE } from "./cakeTypes";
import { ADD_CAKE } from "./cakeTypes";

const initialState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    case SET_CAKE:
      return {
        ...state,
        numOfCakes: 0
      };
    case ADD_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1
      };
    default:
      return state;
  }
};

export default cakeReducer;
