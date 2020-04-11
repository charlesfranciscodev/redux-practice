import React, { Component } from "react";

import { connect } from "react-redux";
import { contactActions } from "./store/actions";

import { ContactGallery } from "./components/ContactGallery";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(contactActions.getContacts());
  }

  render() {
    return (
      <div className="App">
        <ContactGallery />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    contacts: store.contacts
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
