import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store = configureStore({
    // reducer can only update value in store.
    // reducer key is predefined (it is an object which can hold more than 1 reducer)
    // createReducer 
    // createAction
    reducer:{
        counter:counterSlice
    }
})
