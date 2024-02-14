import { Component } from 'react';
import Form from './Form/Form.jsx';
import ContactList from './Contact/ContactList.jsx';
import Filter from './Filter/Filter.jsx';
import { nanoid } from 'nanoid';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      filter: '',
    };

    this.addContact = this.addContact.bind(this);
    this.filterList = this.filterList.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('contacts') !== null) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  addContact(contact) {
    contact.id = nanoid();

    let contacts = this.state.contacts;

    let duplicate = this.state.contacts.find(el => {
      return el.name.toLowerCase() === contact.name;
    });

    if (duplicate !== undefined) {
      alert(`localhost: 3000 says ${duplicate.name} is already in contacts`);
      return;
    }

    contacts.push(contact);

    this.updateContacts(contacts);
  }

  contactList() {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  }

  filterList(query) {
    this.setState({
      filter: query,
    });
  }

  removeContact(id) {
    let contacts = this.state.contacts.filter(el => el.id !== id);

    this.updateContacts(contacts);
  }

  updateContacts(contacts) {
    this.setState({
      contacts: contacts,
    });
  }

  componentDidUpdate() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form addingContact={this.addContact}></Form>
        <h2>Contacts</h2>
        <Filter addingFilterList={this.filterList}></Filter>
        <ContactList
          contacts={this.contactList()}
          remove={this.removeContact}
        ></ContactList>
      </div>
    );
  }
}
