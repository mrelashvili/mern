import React from 'react';
import UserItem from './UserItem';
import './styles/UsersList.css';

const UsersList = ({ items }) => {
  if (items.length === 0)
    return (
      <div className="center">
        <h2>No users found!</h2>
      </div>
    );

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  );
};

export default UsersList;
