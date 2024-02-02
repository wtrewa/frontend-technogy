import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, POST_AUTH_SUCCESS } from "../actionType"

   
   export const   authSingup =  (obj)=> (dispatch)=>{
          try {
            dispatch({type:AUTH_REQUEST})
              axios.post(`http://localhost:8081/users`,obj).then((res)=>{
                console.log(res)
                dispatch({type:POST_AUTH_SUCCESS,payload:res.data})
            })
            
          } catch (error) {
            dispatch({type:AUTH_FAILURE})
          }
   }