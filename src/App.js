import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import NewPlaces from './places/pages/NewPlaces';
import UserPlaces from './places/pages/UserPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places">
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
