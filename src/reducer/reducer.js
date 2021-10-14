import {INCREMENT_HOURS, INCREMENT_MINUTES, INCREMENT_SECONDS, RESET, STOP} from "./types";

export const initialState = {
    HH: 0,
    MM: 0,
    SS: 0
}

export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_SECONDS:
            return {
                ...state,
                SS: state.SS + 1
            }
        case INCREMENT_MINUTES:
            return {
                ...state,
                SS: 0,
                MM: state.MM + 1
            }
        case INCREMENT_HOURS:
            return {
                ...state,
                MM: 0,
                HH: state.HH + 1
            }
        case RESET:
            return initialState
        case STOP:
            return initialState
        default:
            return state;
    }
}