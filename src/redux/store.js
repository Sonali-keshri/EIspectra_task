import {configureStore} from "@reduxjs/toolkit"
import catReducer from './features/slice'

export default configureStore({
    reducer:{
        cat:catReducer
    },
})