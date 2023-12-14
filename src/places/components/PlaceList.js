import React from 'react';
import Button from '../../shared/components/FormElements/Button';

import Card from './../../shared/components/UIElement/Card';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = ({ items }) => {
  if (items.length === 0)
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found! Maybe create one?</h2>
          <Button to="places/new">Share Place</Button>
        </Card>
      </div>
    );

  return (
    <ul className="place-list">
      {items.map((place) => (
        <PlaceItem place={place} key={place._id} />
      ))}
    </ul>
  );
};

export default PlaceList;
