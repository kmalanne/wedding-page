import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home';
import { Info } from './containers/Info';
import { RSVP } from './containers/RSVP';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/info" exact component={Info} />
    <Route path="/rsvp" exact component={RSVP} />
  </Switch>
);
