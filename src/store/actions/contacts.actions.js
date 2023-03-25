import { contactsConstants } from "../constants";

export const contactActions = {
  getContacts
};

function getContacts() {
  return {
    type: contactsConstants.CONTACTS_FETCH_REQUESTED
  };
}
