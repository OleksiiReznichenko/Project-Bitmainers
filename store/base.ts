import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface BaseState {
    mobileNavOpenedIndicator: boolean;
    isTouchDevice: boolean;
}

const initialBaseState: BaseState = {
    mobileNavOpenedIndicator: false,
    isTouchDevice: false
};

const isTouchDevice = (): boolean => {
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0));
}

const baseSlice = createSlice({
    name: 'base',
    initialState: initialBaseState,
    reducers: {
        toggleMobileNavOpenedIndicator(state) {
            state.mobileNavOpenedIndicator = !state.mobileNavOpenedIndicator;
        },
        closeMobileNavOpenedIndicator(state) {
            state.mobileNavOpenedIndicator = false;
        },
        checkIsTouchDevice(state) {
          state.isTouchDevice = isTouchDevice();
        }
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
});

export const baseActions = baseSlice.actions;

export const selectMobileNavOpenedIndicator = (state: AppState) => state.base.mobileNavOpenedIndicator;
export const selectIsTouchDevice = (state: AppState) => state.base.isTouchDevice;

export default baseSlice.reducer;
