import { FormContainer, Button, FormTitle } from './ContactForm.styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
//import { addContact } from 'redux/operations';
import { selectContacts, selectResult } from 'redux/selectors';
import { useAddContactMutation } from 'redux/contactsApi';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const contactsApi = useSelector(selectResult);
  const [
    addContact, // This is the mutation trigger
    // { isLoading: isUpdating }, // This is the destructured mutation result
  ] = useAddContactMutation();

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      window.alert(`Контакт ${name} вже є в списку`);
      return;
    }
    // dispatch(addContact({ name, number }));
    addContact({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  console.log(contactsApi);
  return (
    <FormContainer>
      <FormTitle>Телефонна книга</FormTitle>

      <form onSubmit={handleSubmit}>
        <label>
          <span>{'Ім`я'}</span>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name (Rosie Simpson)"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label>
          <span>{'Телефон'}</span>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter phone (111-11-11)"
            value={number}
            onChange={handleChangeNumber}
          />
        </label>

        <Button type="submit">
          <span>{'Додати контакт'}</span>
        </Button>
      </form>
    </FormContainer>
  );
};

export default ContactForm;
