import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Header = () => {
  return ( 
  <div>
    to jest Header
    <Link to='/admin/dashboard'>Admin</Link>
  </div> );
}
 
export default Header;