import { actionTypes } from "../types";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERS_LIST:
      return {
        ...state,
        usersList: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
