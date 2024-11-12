// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit'


const cardSplice = createSlice({
    name : "card",
    initialState:{
        items : []
    },
    reducers : {
        addItem : (state,action)=>{
            state.items.push(action.payload)
        },
        removeItem : (state,action)=>{
            state.items.pop()
        },
        clearItem : (state, action) =>{
            state.items.length = 0;
        }
    }
})
export const {addItem, removeItem, clearItem} = cardSplice.actions
export default cardSplice.reducer;