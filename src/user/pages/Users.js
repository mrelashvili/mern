import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const DUMMY = [{ id: 'u1', name: 'lewis ham', image: 'www', places: 3 }];
  return <UsersList items={DUMMY} />;
};

export default Users;
