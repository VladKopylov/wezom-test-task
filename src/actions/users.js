import axios from "axios";
import { notification } from "antd";

import { User } from "../models/User";

const getUsers = (payload) => ({ type: "GET_USERS", payload });

const setLoadingUsers = (payload) => ({ type: "LOADING_USERS", payload });

export const fetchUsers = () => async (dispatch) => {
  dispatch(setLoadingUsers(true));

  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=100");
    dispatch(getUsers(data.results.map((el) => new User(el))));
  } catch (e) {
    const args = {
      message: "Oups",
      description: "Something went wrong.",
      duration: 0,
    };
    notification.open(args);

    console.error("Error in loading users data", e);
  }

  dispatch(setLoadingUsers(false));
};
