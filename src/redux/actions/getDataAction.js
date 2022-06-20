import { GET_DATA } from "./actionTypes";
import axios from "axios";

export const requestData = () => async (dispatch) => {
    try {
      const asyncData = await axios.get(
        "https://629e14403dda090f3c12ec2c.mockapi.io/v1/data"
      );
      dispatch(getData(asyncData));
    } catch (error) {
      // dispatch(errorAction(error));
    }
};

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}