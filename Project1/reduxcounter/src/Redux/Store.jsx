import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Slices/Counter/Counter';

export const store = configureStore({
    reducer:{
        counter : counterReducer,
    },
})