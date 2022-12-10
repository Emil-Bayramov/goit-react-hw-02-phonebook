import PropTypes from 'prop-types';

import { ListItem } from './ContactListItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button
        type="button"
        onClick={() => {
          deleteContact(id);
        }}
      >
        Delete
      </Button>
    </ListItem>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,

  deleteContact: PropTypes.func,
};
