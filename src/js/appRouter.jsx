import React from 'react';
import {
  Route,
  IndexRoute,
} from 'react-router';

import Config from './configs/config';
import Master from './components/master.jsx';
import AddUserContainer from './containers/addUserContainer.jsx';
import EditUserContainer from './containers/editUserContainer.jsx';

const AppRoutes = (
  <Route path={ Config.rootDir } component = { Master }>
    <IndexRoute component = { AddUserContainer } />
    <Route path = "add" component = { AddUserContainer } />
    <Route path = "edit/:id" component = { EditUserContainer } />
    {/*<Route path = "/" component = { Home } />*/}
    {/* <Route path = "*" component = { NotFound } /> */}
  </Route>
);
export default AppRoutes;
