// import { configureStore, createSlice } from '@reduxjs/toolkit';
// import {createStore} from 'redux';

// // const store = createStore(counterSlice.reducer);
// const store = configureStore({
//     reducer: {
//         counter: counterSliceReducer,
//     }
// });

// export default store;

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import baseSliceReducer from './base';
import slideFunctionsReducer from './slideFunctions';
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
        base: baseSliceReducer,
        slideFunctions: slideFunctionsReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);