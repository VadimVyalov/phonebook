import { ContactItem } from 'components/ContactList/ContactList.styled';
import Loader from 'components/Loader/Loader';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <ContactItem>
      {name}:
      <span>
        {number}
        <button type="button" onClick={() => deleteContact(id)}>
          {isLoading && <Loader size={15} />}delete
        </button>
      </span>
    </ContactItem>
  );
};
