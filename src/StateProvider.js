import { createContext, useContext, useReducer } from "react"; // imports


export const StateContex = createContext(); // preparing the data layer

//below is known as higher order component
// we will be wrapping the app_content between the StateContex.provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContex.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContex.Provider>
);

/* useReducer() is a React hook that:
1. Takes a reducer function and initialState.
2. Returns [state, dispatch].
3. This state is your data.
4. This dispatch() is a function to update the state. */


// whenever we want to pull something from the data layer we must use the useStateValue  it is a custom hook
export const useStateValue = () => useContext(StateContex);
