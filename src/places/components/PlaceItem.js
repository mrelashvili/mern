import React from 'react';
import Card from '../../shared/components/UIElement/Card';
import './PlaceItem.css';

const PlaceItem = ({ place }) => {
  const { id, imageUrl, title, description, address, creator, location } =
    place;
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="place-item__info">
          <h3>{title}</h3>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="place-item__actions">
          <button>View on Map</button>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
