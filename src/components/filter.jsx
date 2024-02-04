import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class Filter extends Component {
  addFilter = evt => {
    const query = evt.currentTarget.value;

    this.props.addingFilterList(query);
  };

  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <input
          onChange={this.addFilter}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </div>
    );
  }
}
Filter.propTypes = {
  addingFilterList: PropTypes.func,
};
