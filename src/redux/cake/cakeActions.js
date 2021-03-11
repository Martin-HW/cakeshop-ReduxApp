import { BUY_CAKE } from "./cakeTypes";
import { ADD_CAKE } from "./cakeTypes";
import { SET_CAKE } from "./cakeTypes";

export const buyCake = () => {
  return {
    type: BUY_CAKE
  };
};

export const setCake = () => {
  return {
    type: SET_CAKE
  };
};

export const addCake = () => {
  return {
    type: ADD_CAKE
  };
};
