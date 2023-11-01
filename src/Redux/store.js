import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'Redux/contactsSlice';
import { filterReducer } from 'Redux/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
