import React from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import './NewPlace.css';

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        type="text"
        label="title"
        element="input"
        errorText="Please enter a valid title."
        validators={[VALIDATOR_REQUIRE()]}
      />
    </form>
  );
};

export default NewPlaces;
