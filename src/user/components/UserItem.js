import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElement/Card';
import Avatar from './../../shared/components/UIElement/Avatar';
import './styles/UserItem.css';

const UserItem = ({ user }) => {
  const { id, image, name, places } = user;
  console.log('ae', id);
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${id}/places`}>
          <div className="user-item__image">
            <Avatar image={image} alt={name} />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {places} {places === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
