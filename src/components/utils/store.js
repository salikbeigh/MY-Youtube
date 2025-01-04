import { configureStore } from "@reduxjs/toolkit";
import appSlice from './appSlice';
import ChatSlice from './ChatSlice';
const store= configureStore({
reducer:{
    app: appSlice,
    chat:ChatSlice
},
});
export default store;