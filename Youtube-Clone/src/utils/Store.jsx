import {configureStore} from '@reduxjs/toolkit'
import AppSlice from "./AppSlice"
import SearchSlice from "./SearchCase"
import Chat from "./Chat"

const Store = configureStore({
    reducer:{
        app: AppSlice,
        search : SearchSlice,
        chat : Chat
    }
})

export default Store