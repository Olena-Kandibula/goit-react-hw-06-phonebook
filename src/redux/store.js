import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducers';
import phoneBookReducer from './phonebook/phonebook-reducers';

// console.log(process.env.NODE_ENV);//development OR PRODUCTION
const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
  reducer: {
    counter: counterReducer,
    phoneBook: phoneBookReducer,
  },
  middleware: middleware,
  // devTools: process.env.NODE_ENV === 'development',
});

export default store;

// ====== react redux============

// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createStore, combineReducers } from 'redux';
// import counterReducer from './counter/counter-reducers';
// import phoneBookReducer from './phonebook/phonebook-reducers';

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phoneBook: phoneBookReducer,
// });

// // devTools: process.env.NODE_ENV === 'development',

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
