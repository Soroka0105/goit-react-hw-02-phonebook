import { Form } from "./Form";
import { nanoid } from 'nanoid'
import { Component } from 'react'
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
// import {Alert} from 'react';

export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', phone: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', phone: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', phone: '227-91-26'},
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
    contact.name.toLowerCase().includes(NormalizedFilter))
}

  addContact = (newContact) => {
    // const newAlert = () => Alert.alert("ahtung")
    const newName = newContact.name
    console.log(newContact);
    const addContactObj = {
      ...newContact,
      id: nanoid()
    }
    console.log(newName);
    this.state.contacts.forEach(contact => 
      contact.name.toLowerCase() === newName.toLowerCase()) ? console.log('yes'):console.log('no');


this.setState((prev) =>(
  {contacts: [...prev.contacts, addContactObj]}
)
)
          }


deleteContact = (id) => {
  this.setState((prev) => ({contacts: prev.contacts.filter((el)=> el.id !== id)}))
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
      <h1 style={{margin:0}}>Phonebook</h1>
<Form addContact={this.addContact} />
<h2>Contacts</h2>
<Filter value ={this.state.filter} onChange = {this.ContactFilter}/>
<ContactList array = {VisibleContacts} deleteContact={this.deleteContact}/>
    </div>
  );
};
}