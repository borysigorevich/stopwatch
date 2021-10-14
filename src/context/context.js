import {createContext, useReducer} from "react";
import {initialState, reducer} from "../reducer/reducer";

export const Context = createContext({
    stopwatch: {
        HH: 0,
        MM: 0,
        SS: 0
    },
    dispatch: () => {

    }
})


export const ContextProvider = ({children}) => {
    const [stopwatch, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{
            stopwatch,
            dispatch
        }
        }>
            {children}
        </Context.Provider>
    )
}