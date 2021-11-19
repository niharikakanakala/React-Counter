import { INCREMENT, DECREMENT } from "../actionTypes/Counter.actionTypes";

export const increment = () => {
    return {
      type: INCREMENT,
    };
  };
  
 export const decrement = () => {
    return {
      type: DECREMENT,
    };
  };