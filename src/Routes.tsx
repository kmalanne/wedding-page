import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home';
import { Info } from './containers/Info';
import { RSVP } from './containers/RSVP';
import { Contact } from './containers/Contact';

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/info" exact component={Info} />
    <Route path="/rsvp" exact component={RSVP} />
    <Route component={Home} />
  </Switch>
);
