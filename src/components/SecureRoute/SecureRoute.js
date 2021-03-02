import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const SecureRoute = ({component:Component, ...rest}) => (
  <Route {...rest} render={props => {
     return localStorage.getItem(false)
     ? <Component {...props}/>
     : <Redirect to={{pathname: '/login', state:{from: props.location}}}/>
  }}/>

)

export default SecureRoute;