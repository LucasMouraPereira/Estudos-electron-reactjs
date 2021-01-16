import React from 'react';
import { Provider } from 'react-redux';
import Routers from './routers/routers';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './style/globalStyle'

import store from './store';

const App = () => (
  <Provider store={ store }>
    <GlobalStyle />
    <HashRouter>
      <Routers />
    </HashRouter>
  </Provider>
);

export default App;
