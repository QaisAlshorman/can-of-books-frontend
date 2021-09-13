
import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Header from './Header';
import BestBooks from './BestBooks';

import Login from './Login';
import Profile from './Profile';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {

    // console.log('app', this.props);

    let authnticated = this.props.auth0.isAuthunticated;

    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {authnticated ? <BestBooks /> : <Login />}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              {/* <Profile/> */}
              <Route exact path='/profile'>
                {/* {!authnticated? <BestBooks/> : <Profile/>} */}
                <Profile/>

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
