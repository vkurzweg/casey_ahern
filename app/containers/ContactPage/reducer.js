/*
 *
 * ContactPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  SET_NAME,
  SET_EMAIL,
  SET_NUMBER,
  SET_BODY,
} from './constants';

const initialState = fromJS({
  name: '',
  email: '',
  number: '',
  body: '',
  isCreatingMessage: false,
  isCreateFailed: false,
});

function contactPageReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return state.set('isCreatingMessage', fromJS(action.payload));
    case CREATE_MESSAGE_SUCCESS:
      return state.set('isCreatingMessage', fromJS(action.payload));
    case CREATE_MESSAGE_FAILURE:
      return state.set('isCreatingMessage', fromJS(action.payload))
                  .set('isCreateFailed', fromJS(action.isCreateFailed));
    case SET_NAME:
      return state.set('name', action.event);
    case SET_EMAIL:
      return state.set('email', action.email);
    case SET_NUMBER:
      return state.set('number', action.number);
    case SET_BODY:
      return state.set('body', action.body);
    default:
      return state;
  }
}

export default contactPageReducer;
