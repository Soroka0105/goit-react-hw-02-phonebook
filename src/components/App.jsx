import { Form } from "./Form";
import { nanoid } from 'nanoid'
import { Component } from 'react'
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  ContactFilter = evt => {
  this.setState({filter: evt.currentTarget.value})
  console.log(this.state.filter);
  };

getVisibleContacts = () => {
  const {filter, contacts} = this.state
  const NormalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => 
    contact.text.toLowerCase().includes(NormalizedFilter))
}

  addContact = (newContact) => {
    console.log(newContact);
    const addContactObj = {
      ...newContact,
      id: nanoid()
    }
this.setState((prev) =>(
  {contacts: [...prev.contacts, addContactObj]}
))
console.log(this.state);

          }
render(){

  const VisibleContacts = this.getVisibleContacts()

  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <h1>Phonebook</h1>
<Form addContact={this.addContact} />
<h2>Contacts</h2>
<Filter value ={this.state.filter} onChange = {this.ContactFilter}/>
<ContactList array = {VisibleContacts}/>
    </div>
  );
};
}