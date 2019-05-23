import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import HomePage from './containers/HomePage/HomePage';
import UsersPage from './containers/UsersPage/UsersPage';
import FormsPage from './containers/FormPage/FormPage';
import LoginPage from './containers/LoginPage/LoginPage';
import LogoutPage from './containers/LoginPage/LogoutPage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/forms" component={FormsPage} />
            <PrivateRoute path="/users" component={UsersPage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
