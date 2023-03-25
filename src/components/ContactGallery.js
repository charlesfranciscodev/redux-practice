import React, { Component } from "react";

import { connect } from "react-redux";
import { contactActions } from "../store/actions";

import ContactCard from "./ContactCard";
import "./ContactGallery.css";

class ContactGallery extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(contactActions.getContacts());
  }

  render() {
    return (
      <div className="container">
        {
          this.props.contacts.map(contact => 
            <ContactCard contact={contact} key={contact.id} />
          )
        } 
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    contacts: store.contacts
  };
}

const connectedContactGallery = connect(mapStateToProps)(ContactGallery);
export {connectedContactGallery as ContactGallery};
