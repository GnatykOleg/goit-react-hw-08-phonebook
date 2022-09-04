import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './contacts-actions';
import {
  fetchContacts,
  deleteContacts,
  addContacts,
} from './contacts-operations';

export const contactsReducer = createReducer([], {
  // У операция 3 свойства, я обращаюсь к нужному.
  // Если я вызову fetchContacs.fulfilled(5),
  // Я получу {type:contacts/fetchContacts, payload :5}.

  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContacts.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContacts.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),

  // Раньше я передавал мануальный action, теперь саму операцию
  // создания createAsuncThunk
  // [fetchContactsSuccess]: (_, { payload }) => payload,
});

export const loadingReducer = createReducer(false, {
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.pending]: () => true,
  [fetchContacts.rejected]: () => false,
  [deleteContacts.fulfilled]: () => false,
  [deleteContacts.pending]: () => true,
  [deleteContacts.rejected]: () => false,
  [addContacts.fulfilled]: () => false,
  [addContacts.pending]: () => true,
  [addContacts.rejected]: () => false,

  // СТАРЫЙ
  // [fetchContactsSuccess]: () => false,
  // [fetchContactsRequest]: () => true,
  // [fetchContactsError]: () => false,
});

export const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
