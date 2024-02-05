import { AUTH_FAILURE, AUTH_REQUEST, POST_AUTH_SUCCESS } from "../actionType"

const init ={
    isLoading:false,
    isError:false,
    User:{},
}
export const reducer = (state=init,{type,payload})=>{
     switch (type) {
        case AUTH_REQUEST: return {...state,isLoading:true};
        case POST_AUTH_SUCCESS:return {...state,isLoading:false,User:payload};
        case AUTH_FAILURE:return {...state,isError:true};
        default:return state;   
     }
}