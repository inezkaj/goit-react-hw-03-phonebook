import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact.jsx';

export default class ContactList extends Component {
  removeClick(id) {
    this.props.remove(id);
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => {
            return (
              <Contact
                contact={contact}
                remove={this.props.remove}
                key={contact.id}
              ></Contact>
            );
          })}
        </ul>
      </div>
    );
  }
}
ContactList.propTypes = {
  remove: PropTypes.func,
  contacts: PropTypes.array,
};
