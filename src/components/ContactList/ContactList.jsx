import { useSelector } from 'react-redux';
import { selectfiltredContact } from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactListItem/ContactListItem';
import { List, Typography, Collapse, Box } from '@mui/material';

import { TransitionGroup } from 'react-transition-group';
import { useDeleteContactMutation } from 'redux/contacts/contactsApi';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ContactList = () => {
  const filtredContacts = useSelector(selectfiltredContact);
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [currentItem, setCurrentItem] = useState(0);
  const onDelete = id => {
    setCurrentItem(id);
    toast.promise(deleteContact(id).unwrap(), {
      loading: 'Пробую видалити...',
      success: data => `Контакт з ім'ям "${data?.name}" видалено`,
      error: error => `${error?.data?._message}`,
    });
  };
  return filtredContacts.length ? (
    <Box>
      <Typography>Контакти</Typography>
      <List>
        <TransitionGroup>
          {filtredContacts.map(contact => (
            <Collapse key={contact.id}>
              {ContactItem({
                ...contact,
                onDelete,
                isLoading: isLoading && contact.id === currentItem,
              })}
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  ) : (
    <Typography>Контактів нема</Typography>
  );
};

export default ContactList;
