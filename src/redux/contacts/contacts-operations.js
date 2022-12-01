import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error(`Sorry error ${error.message}`, { position: 'top-center' });
      return rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({ number, name }, { rejectWithValue }) => {
    const contacts = { number, name };
    try {
      const { data } = await axios.post('/contacts', contacts);
      toast.success('You have successfully add contact.', {
        position: 'top-center',
      });
      return data;
    } catch (error) {
      toast.error(`Sorry error ${error.message}`, { position: 'top-center' });
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('You have delete contact.', {
        position: 'top-center',
      });
      return id;
    } catch (error) {
      toast.error(`Sorry error ${error.message}`, { position: 'top-center' });
      return rejectWithValue(error.message);
    }
  }
);
