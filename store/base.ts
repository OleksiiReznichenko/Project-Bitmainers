import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";
import type { ActiveCharacter } from '@/types/ActiveCharacter.ts';

// Type for our state
export interface BaseState {
    mobileNavOpenedIndicator: boolean;
    sectionChooseAnimationStarted: boolean;
    activeChooseCharacter: ActiveCharacter;
}

const initialBaseState: BaseState = {
    mobileNavOpenedIndicator: false,
    sectionChooseAnimationStarted: false,
    activeChooseCharacter: 'yellow'
};

const baseSlice = createSlice({
    name: 'base',
    initialState: initialBaseState,
    reducers: {
        toggleMobileNavOpenedIndicator(state): void {
            state.mobileNavOpenedIndicator = !state.mobileNavOpenedIndicator;
        },
        closeMobileNavOpenedIndicator(state): void {
            state.mobileNavOpenedIndicator = false;
        },
        sectionChooseAnimationStartedToFalse(state): void {
            state.sectionChooseAnimationStarted = false;
        },
        sectionChooseAnimationStartedToTrue(state): void {
            state.sectionChooseAnimationStarted = true;
        },
        selectActiveChooseCharacter(state, action): void {
            state.activeChooseCharacter = action.payload.character;
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

export const selectMobileNavOpenedIndicator = (state: AppState) => state.base.mobileNavOpenedIndicator;
export const selectSectionChooseAnimationStarted = (state: AppState) => state.base.sectionChooseAnimationStarted;
export const selectActiveChooseCharacter = (state: AppState) => state.base.activeChooseCharacter;

export default baseSlice.reducer;
