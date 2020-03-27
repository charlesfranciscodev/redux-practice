import { contactsConstants } from "../constants";

const initialState = {
  contacts: []
};

export function contacts(state = initialState, action) {
  switch (action.type) {
    case contactsConstants.CONTACTS_FETCH_REQUESTED:
      return state;
    case contactsConstants.CONTACTS_FETCH_SUCCEEDED:
      return {
        contacts: action.contacts
      }
    case contactsConstants.CONTACTS_FETCH_FAILED:
      return state;
    default:
      return state;
  }
}
