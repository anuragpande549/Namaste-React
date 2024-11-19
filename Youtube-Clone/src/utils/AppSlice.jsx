import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name:'toggle',
    initialState:{
        isMenuOpen: true
    },
    reducers : {
        toggleSideBar : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const {toggleSideBar} = AppSlice.actions
export default AppSlice.reducer;