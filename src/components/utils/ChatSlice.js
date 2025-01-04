import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";
const ChatSlice=createSlice({
    name:"chat",
    initialState:{
   messages:[],
    },
reducers:{
    addMessage:(state,action)=>{
        state.messages.splice(OFFSET_LIVE_CHAT,1);
        state.messages.push(action.payload);
    }
}
})
export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer