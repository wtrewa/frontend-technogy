import { AUTH_FAILURE, AUTH_REQUEST, PATCH_CART_PRODUCT_SUCCESS, POST_AUTH_SUCCESS } from "../actionType"

const init ={
    isLoading:false,
    isError:false,
    isAuth:false,
    User:{},
}
export const reducer = (state=init,{type,payload})=>{
     switch (type) {
        case AUTH_REQUEST: return {...state,isLoading:true};
        case POST_AUTH_SUCCESS :return {...state,isLoading:false,isAuth:true,User:payload};
        case PATCH_CART_PRODUCT_SUCCESS:return {...state,isLoading:false,isAuth:true,User:{...state.User,cartProducts:[...state.User.cartProducts,payload]}};
        case AUTH_FAILURE:return {...state,isError:true};
        default:return state;   
     }
}