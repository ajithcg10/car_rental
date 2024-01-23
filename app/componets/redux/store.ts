import { configureStore } from '@reduxjs/toolkit'
import carReducer from "./carSlice/carSlice"
import { TypedUseSelectorHook, useSelector } from 'react-redux'


export const store = 
  configureStore({
    reducer: {carReducer},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export const UseAppSelector:TypedUseSelectorHook<RootState> =useSelector
