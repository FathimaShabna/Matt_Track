import {configureStore}from '@reduxjs/toolkit'
import reducers from '../reducers';


export const store = configureStore({
    reducer:reducers(),
})


export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];