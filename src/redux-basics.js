

const redux = require ('redux');

const rootReducer = (state = initiaiState, action) => state;

const store = redux.createStore(rootReducer);

const initiaiState = {
    counter: 0
}

console.log (store.getState())
