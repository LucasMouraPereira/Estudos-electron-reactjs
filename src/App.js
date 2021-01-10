import React from 'react';
import { Provider } from 'react-redux';
import Routers from './routers/routers';
import { BrowserRouter } from 'react-router-dom';

import store from './store';

const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  </Provider>
);

export default App;
