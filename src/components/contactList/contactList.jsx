import React from 'react';
import {
  ContactListCss,
  Items,
  ButtonCss,
} from 'components/contactList/contactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'Redux/selectors';
import { deleteContactsThunk } from 'Redux/contactsThunk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContactList = useSelector(selectFilteredContacts);

  return (
    <div>
      <ContactListCss>
        {filteredContactList?.map(({ id, name, phone }) => (
          <Items key={id}>
            {name}: {phone}
            <ButtonCss
              type="button"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              Delete
            </ButtonCss>
          </Items>
        ))}
      </ContactListCss>
    </div>
  );
};
