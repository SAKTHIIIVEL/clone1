
// the initial data of the app 
export const initialState = {
    user: null,
};

// this is a label for the actions Here there is one action called SET_USER
export const actionTypes = {
    SET_USER: 'SET_USER',
};

// this func is responsible to change the state 
// state --> is initial state like (user:null)
// action -->The instruction (object) on how to change the state. It usually looks like this: { type: 'SET_USER', user: {name: 'John'} }

//switch(action.type) ==> Checks what kind of action is being sent and decides what to do
// case actionTypes.SET_USER:==>	If the action is SET_USER, then update user in the state.
//...state -->	Spread operator (...) keeps the rest of the state unchanged.
//user: action.user--->	Updates the user property in the state with action.user.

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            }
        
        default:
            return state
    }
};

export default reducer;

//Action (e.g., SET_USER) --> Reducer --> Updates State --> Components get new state
