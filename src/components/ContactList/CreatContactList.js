import { LiList, ButtonContacts, UlContacts } from './ContactList.styled';
import { useDispatch } from 'react-redux';

import { DisplayedContacts } from 'redux/filterDisplay';

import { deleteUser } from 'redux/operations';

export default function CreatContactList() {
  const dispatch = useDispatch();
  const displayedContacts = DisplayedContacts();
  return (
    <UlContacts>
      {displayedContacts.map(arr => (
        <LiList key={arr.id}>
          {arr.name}:{arr.number || arr.phone}
          <ButtonContacts
            type="button"
            onClick={() => dispatch(deleteUser(arr.id))}
          >
            Delet
          </ButtonContacts>
        </LiList>
      ))}
    </UlContacts>
  );
}
