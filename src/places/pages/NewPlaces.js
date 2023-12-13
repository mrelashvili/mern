import React, { useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
import Button from './../../shared/components/FormElements/Button';

import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css';
import useHttpClient from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const NewPlaces = () => {
  const auth = useContext(AuthContext);
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const { sendRequest, isLoading, error, clearError } = useHttpClient();

  const history = useHistory();

  const placeSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await sendRequest(
        'http://localhost:5000/api/places',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId,
        }),
        { 'Content-Type': 'application/json' }
      );
      /// redirect the user to different page
      history.push('/');
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={placeSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          type="text"
          label="title"
          element="input"
          errorText="Please enter a valid title."
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Input
          id="description"
          label="description"
          errorText="Please enter a valid description."
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />

        <Input
          id="address"
          element="input"
          label="address"
          errorText="Please enter a valid address."
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Add Place
        </Button>
      </form>
    </>
  );
};

export default NewPlaces;
