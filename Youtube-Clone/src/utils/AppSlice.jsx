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
        closeSideBar : (state) =>{
            state.isMenuOpen = false;
        }
    },
});

export const {toggleSideBar, closeSideBar} = AppSlice.actions
export default AppSlice.reducer;