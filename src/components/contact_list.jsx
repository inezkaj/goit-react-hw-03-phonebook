import css from './contact.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
              <li key={contact.id}>
                <span>{contact.name}</span>:&nbsp;
                <span>{contact.number}</span>
                <button
                  className={css.btnDelete}
                  onClick={this.removeClick.bind(this, contact.id)}
                >
                  delete
                </button>
              </li>
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
