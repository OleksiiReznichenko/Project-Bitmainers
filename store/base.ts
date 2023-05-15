import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";

// Type for our state
export interface BaseState {
    mobileNavOpenedIndicator: boolean;
    isTouchDevice: boolean;
    sectionChooseAnimationStarted: boolean;
}

const initialBaseState: BaseState = {
    mobileNavOpenedIndicator: false,
    isTouchDevice: false,
    sectionChooseAnimationStarted: false
};

const isTouchDevice = (): boolean => {
  return (('ontouchstart' in window) ||  
    (navigator.maxTouchPoints > 0));
}

const baseSlice = createSlice({
    name: 'base',
    initialState: initialBaseState,
    reducers: {
        checkIsTouchDevice(state) {
          state.isTouchDevice = isTouchDevice();
        },
        toggleMobileNavOpenedIndicator(state) {
            state.mobileNavOpenedIndicator = !state.mobileNavOpenedIndicator;
        },
        closeMobileNavOpenedIndicator(state) {
            state.mobileNavOpenedIndicator = false;
        },
        sectionChooseAnimationStartedToFalse(state) {
            state.sectionChooseAnimationStarted = false;
        },
        sectionChooseAnimationStartedToTrue(state) {
            state.sectionChooseAnimationStarted = true;
            console.log('sectionChooseAnimationStarted = true')
        },
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

export const selectIsTouchDevice = (state: AppState) => state.base.isTouchDevice;
export const selectMobileNavOpenedIndicator = (state: AppState) => state.base.mobileNavOpenedIndicator;
export const selectSectionChooseAnimationStarted = (state: AppState) => state.base.sectionChooseAnimationStarted;

export default baseSlice.reducer;
