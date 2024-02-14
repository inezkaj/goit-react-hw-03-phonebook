import css from './Contact.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Contact extends Component {
  removeClick() {
    this.props.remove(this.props.contact.id);
  }
  render() {
    return (
      <li>
        <span>{this.props.contact.name}</span>:&nbsp;
        <span>{this.props.contact.number}</span>
        <button className={css.btnDelete} onClick={this.removeClick.bind(this)}>
          delete
        </button>
      </li>
    );
  }
}
Contact.propTypes = {
  remove: PropTypes.func,
  contact: PropTypes.object,
};
