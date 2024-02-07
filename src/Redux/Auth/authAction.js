import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, CART_PRODUCT_FAILURE, PATCH_CART_PRODUCT_SUCCESS, POST_AUTH_SUCCESS } from "../actionType"
import { getLocalStorageValue, setLocalStorageValue } from "../../localStorage"

   
   export const  loginAction =(obj)=>async(dispatch)=>{
          try {
            dispatch({type:AUTH_REQUEST})
             await axios.post(`https://backendtechno-62qb.onrender.com/api/login`,obj).then((res)=>{
                console.log(res)
                console.log(res.data.token)
                setLocalStorageValue('token',res.data.token)
                dispatch({type:POST_AUTH_SUCCESS,payload:res.data.data})
            })
            
          } catch (error) {
            dispatch({type:AUTH_FAILURE})
          }
   }

 export const cartUpdate = (id,obj)=>async(dispatch)=>{
  try {
   const   token =  getLocalStorageValue('token')
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} ` 
    };
    dispatch({type:CART_PRODUCT_FAILURE})
    console.log(id)
    const data = await axios.patch(`https://backendtechno-62qb.onrender.com/api/user/${id}`,obj,{headers},{new:true});
     dispatch({type:PATCH_CART_PRODUCT_SUCCESS,payload:obj})
    console.log(data)
    return data
  } catch (error) {
    dispatch({type:CART_PRODUCT_FAILURE})
  }
 

 }


 export const singupAction =  (obj)=>async(dispatch)=>{
  try {
    console.log("obj==>",obj)
  const res = await axios.post(`https://backendtechno-62qb.onrender.com/api/register`,obj)
   console.log("res==>",res)
  } catch (error) {
    console.log(error)
  }
 }

 