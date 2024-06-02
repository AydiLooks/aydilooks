import { createContext, useReducer } from "react";


const UserContext=createContext();
const API="https://fake-json-api.mock.beeceptor.com/users";
const initialState={
    isLoading:false,
    isError:false,
    customer:[],
    shopkeeper:[],
    delivery:[],
}
const UserProvider=({children})=>{
  const[state,dispatch]=useReducer(reducer,initialState);
}