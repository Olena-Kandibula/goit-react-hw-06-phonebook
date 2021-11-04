import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers } from 'redux';
import counterReducer from './counter/counter-redusers';
import phoneBookReducer from './phonebook/phonebook-redusers';

const rootReducer = combineReducers({
  counter: counterReducer,
  phoneBook: phoneBookReducer,
});

// devTools: process.env.NODE_ENV === 'development',

const store = createStore(rootReducer, composeWithDevTools());

export default store;
