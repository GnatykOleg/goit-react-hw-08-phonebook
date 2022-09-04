import { createAction } from '@reduxjs/toolkit';

const setFilter = createAction('contacts/setFilter');

export { setFilter };

// ОНИ УЖЕ НЕ НУЖНЫ ПРИ СОЗДАНИИ CreateAsyncThink ОН ИХ СОЗДАЛ АВТОМАТОМ
// const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
// const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
// const fetchContactsError = createAction('contacts/fetchContactsError');
// const deleteContactsRequest = createAction('contacts/deleteContactsRequest');
// const deleteContactsSuccess = createAction('contacts/deleteContactsSuccess');
// const deleteContactsError = createAction('contacts/deleteContactsError');
// const addContactsRequest = createAction('contacts/addContactsRequest');
// const addContactsSuccess = createAction('contacts/addContactsSuccess');
// const addContactsError = createAction('contacts/addContactsError');
