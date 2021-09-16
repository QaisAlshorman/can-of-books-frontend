import React from 'react';
import Header from './Header';

import Footer from './Footer';
import Profile from './Profile'
import BestBooks from './BestBooks';
// import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBooks /> : <LoginButton />}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile"> <Profile />
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
