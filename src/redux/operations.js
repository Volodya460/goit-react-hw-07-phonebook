import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://643473d81c5ed06c9597bb9e.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'contacts/addUser',
  async (text, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', text);
      console.log(text);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'contacts/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${userId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
