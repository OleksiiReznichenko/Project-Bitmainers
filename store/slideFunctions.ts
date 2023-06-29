import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./index";
import { HYDRATE } from "next-redux-wrapper";

interface SlideFunctionParams {
    target: HTMLElement;
    durationDynamic?: number;
}

// SLIDE UP FUNCTION
const slideUpStarter = ({target, durationDynamic}: SlideFunctionParams): void => {
    const duration = durationDynamic || 500;

    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';

    window.setTimeout( () => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

// SLIDE DOWN FUNCTION
const slideDownStarter = ({target, durationDynamic}: SlideFunctionParams): void => {
    const duration = durationDynamic || 500;

    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = '0';
    target.style.paddingTop = '0';
    target.style.paddingBottom = '0';
    target.style.marginTop = '0';
    target.style.marginBottom = '0';
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');

    window.setTimeout( () => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

const slideFunctionsSlice = createSlice({
    name: 'slideFunctions',
    initialState: [],
    reducers: {
        // SLIDE UP FUNCTION
        slideUp(state, action): void {
            const target = action.payload.target;
            const duration = action.payload.duration || 500;

            slideUpStarter({target, durationDynamic: duration});
        },

        // SLIDE DOWN FUNCTION
        slideDown(state, action): void {
            const target = action.payload.target;
            const duration = action.payload.duration || 500;

            slideDownStarter({target, durationDynamic: duration});
        },

        // TOGGLE SLIDES
        slideToggle(state, action): void {
            const target = action.payload.target;
            const duration = action.payload.duration || 500;
            if (window.getComputedStyle(target).display === 'none') {
                slideDownStarter({target, durationDynamic: duration});
            } else {
                slideUpStarter({target, durationDynamic: duration});
            }
        },
    }
})

export const slideFunctionsActions = slideFunctionsSlice.actions;
export default slideFunctionsSlice.reducer;
