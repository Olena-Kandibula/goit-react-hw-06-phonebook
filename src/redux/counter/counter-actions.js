import { createAction } from '@reduxjs/toolkit';

const increment = createAction('counter/Increment');

const decrement = createAction('counter/Decrement');

export { increment, decrement };

// =======react redux============

// import actionTypes from './counter-types';

// export const increment = value => ({
//   type: actionTypes.INCREMENT,
//   payload: value,
// });

// export const decrement = value => ({
//   type: actionTypes.DECREMENT,
//   payload: value,
// });
