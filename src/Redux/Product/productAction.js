import axios from "axios";
import {
  GET_PRODUCTSINGLE_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "../actionType";

export const getProduct = async (dispatch) => {
  try {
    
    dispatch({ type: PRODUCT_REQUEST });
    const resdata = await axios.get(`https://dummyjson.com/products`)
      console.log(resdata)
      dispatch({type:GET_PRODUCT_SUCCESS,payload:resdata.data.products})
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};
export const getProductSearch =(obj)=> async (dispatch) => {
  try {
    console.log(obj)
    dispatch({ type: PRODUCT_REQUEST });
    const resdata = await axios.get(`https://dummyjson.com/products/search`,obj)
      console.log(resdata)
      dispatch({type:GET_PRODUCT_SUCCESS,payload:resdata.data.products})
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};
export const getProductSingle =(id)=> async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const resdata = await axios.get(`https://dummyjson.com/products/${id}`)
      console.log(resdata)
      dispatch({type:GET_PRODUCTSINGLE_SUCCESS,payload: resdata.data})
  } catch (error) {
    dispatch({ type: PRODUCT_FAILURE });
  }
};
