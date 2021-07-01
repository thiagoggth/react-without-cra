import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from 'src/pages/Home';

const Routers: React.FC = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </HashRouter>
);

export default Routers;
