import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    return (
      <div className="contactCard">
        <h1> {this.props.contact.name} </h1>

        <div>
          <i className="fas fa-user"></i> { this.props.contact.username }
        </div>

        <div>
          <i className="fas fa-map-marker-alt"></i> { this.props.contact.address.city }
        </div>

        <div>
          <i className="fas fa-phone"></i> { this.props.contact.phone }
        </div>

        <div>
          <a href={"http://" + this.props.contact.website} target="blank">
            { this.props.contact.website }
          </a>
        </div>
      </div>
    );
  }
}

export default ContactCard;
