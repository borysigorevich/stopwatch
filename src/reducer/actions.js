import {INCREMENT_HOURS, INCREMENT_MINUTES, INCREMENT_SECONDS, RESET, STOP} from "./types";

export const incrementSeconds = () => {
    return {
        type: INCREMENT_SECONDS
    }
}

export const incrementMinutes = () => {
    return {
        type: INCREMENT_MINUTES
    }
}

export const incrementHours = () => {
    return {
        type: INCREMENT_HOURS
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

export const stop = () => {
    return {
        type: STOP
    }
}