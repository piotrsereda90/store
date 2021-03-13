import React from 'react'
import{
  useLocation
}from 'react-router-dom'

const NoMatch = () => {
  let location =useLocation()
  return ( 
    <div>
      No Match Url {location.pathname}
    </div>
   );
}
 
export default NoMatch;