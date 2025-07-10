import { configureStore } from '@reduxjs/toolkit';
import { RootReduce } from './root-reducer';


export const makeStore = () => {
    return configureStore({
        reducer: RootReduce,
    })
}