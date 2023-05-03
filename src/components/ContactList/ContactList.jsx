import { ContactListContainer, ListTitle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectfiltredContact } from 'redux/selectors';
import { ListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const filtredContacts = useSelector(selectfiltredContact);
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
