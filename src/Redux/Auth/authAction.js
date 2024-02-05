import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, CART_PRODUCT_FAILURE, PATCH_CART_PRODUCT_SUCCESS, POST_AUTH_SUCCESS } from "../actionType"

   
   export const  authSingup =(dispatch)=>{
          try {
            dispatch({type:AUTH_REQUEST})
              axios.get(`http://localhost:8080/users/1`).then((res)=>{
                console.log(res)
                dispatch({type:POST_AUTH_SUCCESS,payload:res.data})
            })
            
          } catch (error) {
            dispatch({type:AUTH_FAILURE})
          }
   }

 export const cartUpdate = (obj)=>async(dispatch)=>{
  try {
    dispatch({type:CART_PRODUCT_FAILURE})
    const data = await axios.patch(`http://localhost:8080/users/1`,obj,{new:true});
     dispatch({type:PATCH_CART_PRODUCT_SUCCESS,payload:data})
     return data
    console.log(data)

  } catch (error) {
    dispatch({type:CART_PRODUCT_FAILURE})
  }
 

 }