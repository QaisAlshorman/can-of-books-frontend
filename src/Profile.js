  
import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user,isAuthenticated } = this.props.auth0;
    return(
        <>
        {isAuthenticated && 
        <>
            <div>Hello {user.name}</div>
            <div>Email : {user.email}</div>
            <img src="src/Image/IMG_20210320_180339.jpg" alt="profile pictre"/>
        </>
        }
        {console.log(user)}
        </>
    )
  }
}

export default withAuth0(Profile);