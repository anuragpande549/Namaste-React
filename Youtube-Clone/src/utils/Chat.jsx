import { createSlice } from "@reduxjs/toolkit";

const Chat = createSlice({
    name : "chatData",
    initialState: {
        massage : []
    },

    reducers : {
        addMassage : (state, action) =>{
            if(state.massage.length > 2){
                state.massage.splice(100,1)
            }
            state.massage.unshift(action.payload)
        }
    }
})

export const {addMassage} = Chat.actions
export default Chat.reducer