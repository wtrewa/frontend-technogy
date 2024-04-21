import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as productReducer } from "./Product/productReducer";
import {reducer as authReducer} from './Auth/authReducer';
const rootReducer = combineReducers({productReducer,authReducer})

const myMiddleware = store => dispatch => action => {
   // Middleware logic can go here
   if(typeof action == 'function')
   {
      return action(dispatch)
   }
   
   // Pass the action to the next middleware or to the reducers
   return dispatch(action)
 };
export const  store = legacy_createStore(rootReducer,applyMiddleware(myMiddleware))