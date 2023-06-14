import PropTypes from 'prop-types';
import {
  List,
  ItemContact,
  InfoContact,
  BtnDelContact,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <List>
        {contacts.map(item => {
          return (
            <ItemContact key={item.id}>
              <InfoContact>
                {item.name}: {item.number}
              </InfoContact>
              <BtnDelContact
                type="button"
                onClick={() => {
                  onDeleteContact(item.id);
                }}
              >
                Delete
              </BtnDelContact>
            </ItemContact>
          );
        })}
      </List>
    </>
  );
};

ContactList.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
