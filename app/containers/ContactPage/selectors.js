import { createSelector } from 'reselect';

/**
 * Direct selector to the contactPage state domain
 */
const selectContact = (state) => state.get('contact');
const selectForm = (state) => state.get('form');

/**
 * Other specific selectors
 */

export {
  selectContact,
  selectForm,
};
