import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { testApi } from './testapi'

export function makeStore() {
  return configureStore({
    reducer: {
      [testApi.reducerPath]: testApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware()  
        .concat(logger)
        .concat(testApi.middleware)
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
