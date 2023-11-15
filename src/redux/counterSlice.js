import { createSlice } from "@reduxjs/toolkit";



const counterSlice = createSlice({
    name: 'counterApp',
    initialState: {
        value: 0
    },
    // actions metioned here , reducers key as objects
    reducers: {
        //   logics to update the state

        // function to increment number
        // if its an argument function thhan it can only be accessed by action and value in payload
        increment: (state,action) => {
            state.value += action.payload
        },
        // function to decremnet number
        decrement: (state,action) => {
            state.value -= action.payload
        },
        //function to reset number
        reset: (state) => {
            state.value = 0
        }
    }
})

// action is redquired by component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

// reducer is required to store to change the state value
export default counterSlice.reducer