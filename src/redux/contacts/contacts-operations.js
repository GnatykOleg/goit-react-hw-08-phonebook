import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6311f9a119eb631f9d7cf75f.mockapi.io/';

// 1. Первым параметров в fetchContacts мы передаем Type:'contacts/fetchContacts'.
// Он автоматом создает 3 actions:
// pending:'contacts/requestStatus/pending' (REQUEST ОЖИДАЕТ)
// fulfilled:'contacts/requestStatus/fulfilled' (SUCCESS, УСПЕШНО)
// rejected:'contacts/requestStatus/rejected' (ERROR, ОШИБКА).
// 2. Вторым параметром передаем то что она возвращает,
// это {payload} || action.payload. "Payload Creator".

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('./contacts/');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`./contacts/${id}`);
      return data.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ phone, name }, { rejectWithValue }) => {
    const contacts = { phone, name };
    try {
      const { data } = await axios.post('./contacts', contacts);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// СТАРЫЙ МЕТОД

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('./contacts/');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };

// export const deleteContacts = id => async dispatch => {
//   dispatch(deleteContactsRequest());
//   try {
//     const { data } = await axios.delete(`./contacts/${id}`);
//     dispatch(deleteContactsSuccess(data.id));
//   } catch (error) {
//     dispatch(deleteContactsError(error));
//   }
// };

// export const addContacts =
//   ({ phone, name }) =>
//   async dispatch => {
//     const contacts = { phone, name };
//     dispatch(addContactsRequest());
//     try {
//       const { data } = await axios.post('./contacts', contacts);
//       dispatch(addContactsSuccess(data));
//     } catch (error) {
//       dispatch(addContactsError(error));
//     }
//   };

// НОВЫЙ

// export const fetchContacts = () => async dispatch => {
//   dispatch(fetchContactsRequest());
//   try {
//     const { data } = await axios.get('./contacts/');
//     dispatch(fetchContactsSuccess(data));
//   } catch (error) {
//     dispatch(fetchContactsError(error));
//   }
// };
