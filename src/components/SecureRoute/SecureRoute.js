import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const SecureRoute = ({component:Component, ...rest}) => (
  <Route {...rest} render={props => {
     return sessionStorage.getItem('accessToken')
     ? <Component {...props}/>
     : <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
  }}/>
)
export default SecureRoute;