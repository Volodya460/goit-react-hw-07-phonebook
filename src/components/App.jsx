import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from '../components/Form/Form';
import Filter from '../components/FilterContacts/Filter';
import CreatContactList from './ContactList/CreatContactList';
import { Section } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';

import { getError, getIsLoading, getUserInf } from 'redux/contactSlice';
import { useEffect } from 'react';
import { addUser, fetchContacts } from 'redux/operations';
import Loader from './Loader';

export function App() {
  const state = useSelector(getUserInf);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  function hendleSubmit(values, { resetForm }) {
    const contact = {
      id: nanoid(),
      ...values,
    };
    const isAdded = checkContactIsAdded(contact);

    if (isAdded) {
      resetForm();
      return toast(`${contact.name} is already in contacts`);
    } else {
      dispatch(addUser({ id: nanoid(), ...values }));

      resetForm();
    }
  }

  function checkContactIsAdded({ name }) {
    const normalizedContactName = name.toLowerCase();

    return state.find(
      ({ name }) => name.toLowerCase() === normalizedContactName
    );
  }

  return (
    <Section>
      <ContactForm hendleSubmit={hendleSubmit} />
      {isLoading && !error && (
        <div
          style={{
            position: 'absolute',
            top: '100px',
            left: '50px',
          }}
        >
          <Loader />
        </div>
      )}
      <h2>Contacts</h2>

      <h2>Find Contacts by name</h2>

      <Filter />

      <CreatContactList />
      <ToastContainer />
    </Section>
  );
}
