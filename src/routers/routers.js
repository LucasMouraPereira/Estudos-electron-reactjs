import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {InitialPrefix, WorldPrefix, CreditsPrefix} from './endpoints';
import InitialScreen from '../screens/Initial';
import WorldScreen from '../screens/World';
import Credits from '../screens/Credits';

const Routers = () => (
    <Switch>
        <Route path={InitialPrefix} exact component={ InitialScreen } />
        <Route path={WorldPrefix} component={ WorldScreen } />
        <Route path={CreditsPrefix} component={ Credits } />
    </Switch>
);

export default Routers;