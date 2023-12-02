import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './PlaceForm.css';

const DUMMY_PLACEs = [
  {
    id: 'p1',
    title: 'empire state',
    description: 'saldad',
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
    description: 'saldad',
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

const UpdatePlace = () => {
  const { placeId } = useParams();

  const identifiedPlace = DUMMY_PLACEs.find((p) => p.id === placeId);

  if (!identifiedPlace) return <p>Could not find place!</p>;

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
