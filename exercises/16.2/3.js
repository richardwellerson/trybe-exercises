const ADD = 'ADD';

const store = Redux.createStore(messageReducer);

const addMessage = (message) => ({
    type: ADD,
    message,
})

function messageReducer(state = [], action){
    switch (action.type) {
        case 'ADD':
            return [...state,action.message];
        default: return state;
    }
}
