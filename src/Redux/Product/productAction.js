import axios from "axios";
import {
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionType";

export const getProduct = async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const resdata = await axios.get("https://dummyjson.com/products")
      console.log(resdata)
      dispatch({type:GET_PRODUCT_SUCCESS,payload:resdata.data.products})
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};
