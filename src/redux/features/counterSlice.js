import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        },
        increamentAmount: (state,actions) => {
            state.value += actions.payload
        },
    }
})   

export const {increament, decreament, increamentAmount} = counterSlice.actions
export default counterSlice.reducer 
