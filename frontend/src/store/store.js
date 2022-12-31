import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { cakeSlice } from './cakes/cakeSlice';



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cake: cakeSlice.reducer,
    },
})