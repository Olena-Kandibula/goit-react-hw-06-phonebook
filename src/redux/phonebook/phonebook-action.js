import shortid from 'shortid';
import phoneBookTypes from './phonebook-types';

// const deleteContact = value => ({
//   type: actions.DELETE,
//   payload: value,
// });

export const addContact = ({ name, number }) => ({
  type: phoneBookTypes.ADD,
  payload: {
    name: name,
    number: number,
    id: shortid.generate(),
  },
});

export const deleteContact = idContact => ({
  type: phoneBookTypes.DELETE,
  payload: idContact,
});

// export const selectContact = value => ({
//     type: phoneBookTypes.SELECT,
//     payload: value,
// });

// export const changeFilter = event => ({
//   type: phoneBookTypes.CHANGE_FILTER,
//   payload: event.target.value,
// });

export const changeFilter = value => ({
  type: phoneBookTypes.CHANGE_FILTER,
  payload: value,
});
