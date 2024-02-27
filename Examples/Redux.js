// Redux.js

// Import Redux
const { createStore, combineReducers } = require('redux');

// Define actions
const incrementAction = {
    type: 'INCREMENT'
};

const decrementAction = {
    type: 'DECREMENT'
};

const toggleAction = {
    type: 'TOGGLE'
};

// Define counter reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// Define toggle reducer
const toggleReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return !state;
        default:
            return state;
    }
};

// Combine reducers into root reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    toggle: toggleReducer
});

// Create store
const store = createStore(rootReducer);

Subscribe to store changes
store.subscribe(() => {
    console.log('Current state:', store.getState());
});

// store.subscribe(() => {
//     console.log('Current state:', store.getState().toggle);
// });


// Dispatch actions
store.dispatch(incrementAction);
//console.log('Counter state after increment:', store.getState().counter); // Output: 1

store.dispatch(decrementAction);
//console.log('Counter state after decrement:', store.getState().counter); // Output: 0

store.dispatch(toggleAction);
//console.log('Toggle state after toggle:', store.getState().toggle); // Output: true



store.dispatch(toggleAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(toggleAction);
//console.log('Toggle state after toggle:', store.getState()); // Output: true

