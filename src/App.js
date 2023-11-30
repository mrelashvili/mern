import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import NewPlaces from './places/components/NewPlaces';
import UsersList from './user/components/UsersList';

function App() {
  return (
    <Router>
      <Route path="/">
        <UsersList />
      </Route>
      <Route path="/places/new" exact>
        <NewPlaces />
      </Route>
      <Redirect to="/" />
    </Router>
  );
}

export default App;
