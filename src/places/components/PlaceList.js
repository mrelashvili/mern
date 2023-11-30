import React from 'react';

import Card from './../../shared/components/UIElement/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = ({ items }) => {
  if (items.length === 0)
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found! Maybe create one?</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem place={place} key={place.id} />
      ))}
    </ul>
  );
};

export default PlaceList;
