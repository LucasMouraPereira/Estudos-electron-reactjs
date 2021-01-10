import React from 'react';
import { Route, Switch } from 'react-router-dom';

import InitialScreen from '../screens/Initial';

const Routers = () => (
    <Switch>
        <Route path="/" exact component={ InitialScreen } />
    </Switch>
);

export default Routers;