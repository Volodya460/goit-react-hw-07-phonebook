import { createSlice } from '@reduxjs/toolkit';
import { addUser, deleteUser, fetchContacts } from './operations';

export const contactSlice = createSlice({
  name: 'user',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addUser.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(deleteUser.pending, state => {
        state.contacts.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          item => item.id !== action.payload.id
        );
      })

      .addCase(deleteUser.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
  reducers: {
    filterDisplay: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterDisplay } =
  contactSlice.actions;

export const getUserInf = state => state.user.contacts.items;
export const getInputFilter = state => state.user.filter;
export const getIsLoading = state => state.user.contacts.isLoading;
export const getError = state => state.user.contacts.error;
