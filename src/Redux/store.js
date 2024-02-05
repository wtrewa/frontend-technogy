import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as productReducer } from "./Product/productReducer";
import {reducer as authReducer} from './Auth/authReducer';
const rootReducer = combineReducers({productReducer,authReducer})

export const  store = legacy_createStore(rootReducer,applyMiddleware(thunk))