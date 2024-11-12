import { configureStore } from '@reduxjs/toolkit'

import cardReducer from "./cardSplice"

const appStore = configureStore({
    reducer : {
        card : cardReducer
    }
})

export default appStore