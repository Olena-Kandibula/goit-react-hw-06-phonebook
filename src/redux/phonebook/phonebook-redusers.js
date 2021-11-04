import { combineReducers } from 'redux';
import phoneBookTypes from './phonebook-types';

import contactsJson from '../../contacts.json';

const initialState =
  JSON.parse(window.localStorage.getItem('contacts')) ?? contactsJson;

const contactsReduser = (state = initialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case phoneBookTypes.ADD:
      const newStateAdd = [payload, ...state];
      window.localStorage.setItem('contacts', JSON.stringify(newStateAdd));
      return newStateAdd;

    case phoneBookTypes.DELETE:
      const newStateDelete = state.filter(({ id }) => id !== payload);
      window.localStorage.setItem('contacts', JSON.stringify(newStateDelete));
      return newStateDelete;

    default:
      return state;
  }
};

const filterReduser = (state = '', { type, payload }) => {
  switch (type) {
    case phoneBookTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const phoneBookReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export default phoneBookReducer;
