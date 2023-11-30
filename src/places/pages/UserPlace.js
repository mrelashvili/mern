import React from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
  const DUMMY_PLACEs = [
    {
      id: 'p1',
      title: 'empire state',
      desriptoon: 'saldad',
      imageUrl:
        'https://www.kitano.com/resourcefiles/snippet-main-img/empire-state-building-in-new-york-top.jpg?version=8242023115716',
      address: '123103mm',
      location: {
        lat: 123123,
        lng: 122414,
      },
      creator: 'u1',
    },
    {
      id: 'p2',
      title: 'empire state 2',
      desriptoon: 'saldad',
      imageUrl:
        'https://www.kitano.com/resourcefiles/snippet-main-img/empire-state-building-in-new-york-top.jpg?version=8242023115716',
      address: '123103mm',
      location: {
        lat: 123123,
        lng: 122414,
      },
      creator: 'u2',
    },
  ];

  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACEs.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
