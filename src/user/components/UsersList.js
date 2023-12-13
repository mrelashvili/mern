import React from 'react';
import UserItem from './UserItem';
import './styles/UsersList.css';
import Card from '../../shared/components/UIElement/Card';

const UsersList = ({ items }) => {
  if (items.length === 0)
    return (
      <div className="center">
        <Card>
          <h2>No users found!</h2>
        </Card>
      </div>
    );

  return (
    <ul className="users-list">
      {items.map((user) => (
        <UserItem user={user} key={user._id} />
      ))}
    </ul>
  );
};

export default UsersList;
