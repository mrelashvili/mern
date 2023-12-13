import React, { useEffect, useState } from 'react';
import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import useHttpClient from '../../shared/hooks/http-hook';
import UsersList from '../components/UsersList';

const Users = () => {
  const [users, setUsers] = useState([]);

  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await sendRequest('http://localhost:5000/api/users');

        setUsers(res.users);
      } catch (err) {}
    };
    getUsers();
  }, []);

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && users && <UsersList items={users} />}
    </>
  );
};

export default Users;
