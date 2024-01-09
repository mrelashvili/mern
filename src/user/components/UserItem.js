import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElement/Card';
import Avatar from './../../shared/components/UIElement/Avatar';
import './styles/UserItem.css';

const UserItem = ({ user }) => {
  const { _id, image, name, places } = user;

  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${_id}/places`}>
          <div className="user-item__image">
            <Avatar
              image={`${process.env.REACT_APP_ASSET_URL}/${image}`}
              alt={name}
            />
          </div>
          <div className="user-item__info">
            <h2>{name}</h2>
            <h3>
              {places.length}{' '}
              {places.length === 0 || places.length === 1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
