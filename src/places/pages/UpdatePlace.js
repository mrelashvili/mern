import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import { useForm } from '../../shared/hooks/form-hook';
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

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  if (!identifiedPlace) return <p>Could not find place!</p>;

  console.log('isss', formState);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        valid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        valid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
