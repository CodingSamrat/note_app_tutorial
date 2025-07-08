import { configureStore } from '@reduxjs/toolkit';
import { RootReduce } from './root-reducer';


export const makeUserStore = () => {
    return configureStore({
        reducer: RootReduce,
    })
}