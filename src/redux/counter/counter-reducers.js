import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './counter-actions';

const valueReducer = createReducer(0, {
  [actions.increment]: (state, { payload }) => state + payload,
  [actions.decrement]: (state, { payload }) => state - payload,
});

const stepReduser = createReducer(1, {
  [actions.increment]: (state, _) => state,
});

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReduser,
});

export default counterReducer;

// ===========react redux=========

// import { combineReducers } from 'redux';
// import actionTypes from './counter-types';

// const valueReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case actionTypes.INCREMENT:
//       return state + payload;

//     case actionTypes.DECREMENT:
//       return state - payload;

//     default:
//       return state;
//   }
// };

// const stepReduser = (state = 1, action) => state;

// const counterReducer = combineReducers({
//   value: valueReducer,
//   step: stepReduser,
// });

// export default counterReducer;
