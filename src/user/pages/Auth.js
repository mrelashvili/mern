import React, { useContext, useState } from 'react';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElement/Card';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import './Auth.css';

import ErrorModal from '../../shared/components/UIElement/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import useHttpClient from '../../shared/hooks/http-hook';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(false);

  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin((p) => !p);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        await sendRequest(
          'http://localhost:5000/api/users/login', // url
          'POST', // Method
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }), /// Body
          { 'Content-Type': 'application/json' } /// Header
        );
        auth.login();
      } catch (err) {}
    } else {
      try {
        await sendRequest(
          'http://localhost:5000/api/users/signup',
          'POST',

          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          {
            'Content-Type': 'application/json',
          }
        );
        auth.login();
      } catch (err) {}
    }
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className="authentication">
        {isLoading && <LoadingSpinner asOverlay />}
        <h2>Login required</h2>
        <form onSubmit={submitHandler}>
          {!isLogin && (
            <Input
              element="input"
              label="Name"
              id="name"
              type="text"
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please enter a name."
              onInput={inputHandler}
            />
          )}
          <Input
            id="email"
            element="input"
            type="email"
            label="E-Mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
          <Input
            id="password"
            element="input"
            type="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid Password, at least 5 characters"
            onInput={inputHandler}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        <Button inverse onClick={switchModeHandler}>
          Swith to {isLogin ? 'Sign Up' : 'Login'}
        </Button>
      </Card>
    </>
  );
};

export default Auth;
