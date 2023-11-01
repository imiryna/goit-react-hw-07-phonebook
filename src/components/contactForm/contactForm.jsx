import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContactsThunk, getRequestContacts } from 'Redux/contactsThunk';
import {
  ContactFormCss,
  Description,
  InputFormCss,
  ButtonCss,
} from 'components/contactForm/contactForm.styled';

export const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestContacts());
  }, [dispatch]);


  const handleInputContacts = e => {
    switch (e.target.name) {
      case 'userName':
        setUserName(e.target.value);
        break;

      case 'number':
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const handleAddContacts = ev => {
    ev.preventDefault();
    const newContact = {
      name: userName,
      phone: number,
    };
    dispatch(addContactsThunk(newContact));
    reset();
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  return (
    <ContactFormCss onSubmit={handleAddContacts}>
      <Description>
        Name
        <InputFormCss
          onChange={handleInputContacts}
          type="text"
          name="userName"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Description>
      <Description>
        Number
        <InputFormCss
          onChange={handleInputContacts}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Description>
      <ButtonCss type="submit">Add contacts</ButtonCss>
    </ContactFormCss>
  );
};
