import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import commentReducer from '../features/comments/commentSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        comments: commentReducer
    }
})