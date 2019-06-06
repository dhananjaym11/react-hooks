import React from 'react';
import { connect } from 'react-redux';
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
            <PrivateRoute exact path="/" component={HomePage} isLoading={this.props.isLoading} />
            <PrivateRoute path="/forms" component={FormsPage} isLoading={this.props.isLoading} />
            <PrivateRoute path="/users" component={UsersPage} isLoading={this.props.isLoading} />
            <PrivateRoute path="/logout" component={LogoutPage} isLoading={this.props.isLoading} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.usersReducer.loading
  }
}

export default connect(mapStateToProps)(App);