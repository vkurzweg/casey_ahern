/*
 *
 * ContactPage actions
 *
 */

import {
  CREATE_MESSAGE,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './constants';


export function createMessage() {
  return {
    type: CREATE_MESSAGE,
    payload: true,
  };
}

export function createMessageSuccess() {
  return {
    type: CREATE_MESSAGE_SUCCESS,
    payload: false,
  };
}

export function createMessageFailure() {
  return {
    type: CREATE_MESSAGE_FAILURE,
    payload: false,
    isCreateFailed: true,
  };
}

export function openModal() {
  console.log('action dispatched')
  return {
    type: OPEN_MODAL,
    payload: true,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
    payload: false,
  };
}
