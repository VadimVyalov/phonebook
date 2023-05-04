import { ContactListContainer, ListTitle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectfiltredContact, selectToken } from 'redux/selectors';
import { ListItem } from 'components/ContactListItem/ContactListItem';
import { useAuthenticationQuery } from 'redux/auth/authApi';

const ContactList = () => {
  const filtredContacts = useSelector(selectfiltredContact);

  const token = useSelector(selectToken);

  console.log('Token :', token);
  return filtredContacts.length ? (
    <ContactListContainer>
      <ListTitle>Контакти</ListTitle>
      <ul>
        {filtredContacts.map(contact => (
          <ListItem key={contact.id} {...contact} />
        ))}
      </ul>
    </ContactListContainer>
  ) : (
    <ListTitle>Контактів нема</ListTitle>
  );
};

export default ContactList;
