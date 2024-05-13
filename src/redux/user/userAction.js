import AxiosInstance from "../axios";
import { actionTypes } from "../types";

export const setUserslist = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.SET_USERS_LIST,
    payload: data,
  });
};

export const getUsersList = () => async (dispatch) => {
  try {
    const response = await AxiosInstance.get("/users");
    dispatch(setUserslist(response.data));
  } catch (error) {
    console.log(error);
  }
};
