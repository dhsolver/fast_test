import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './routes-config';

const RouteComponent = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return <Component {...props} />;
    }}
  />
);

export default () => (
  <Switch>
    {ROUTES.map((props) => {
      return <RouteComponent key={props.key} {...props} />;
    })}
  </Switch>
);
