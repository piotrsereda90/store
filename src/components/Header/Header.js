import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/image/logo_deer.png';

const TopBar = styled.header`
display:flex;
flex-basis: 100wv;
padding: 10px;
background-color:#202528;
height: 60px;
justify-content: space-between;

`
const Logo = styled.div`
background-color: azure;
border-radius: 50%;
padding: 10px 20px;
margin-left: 20px;
img{
  display:block;
  height: 50px;
}
`
const  RightToolBar = styled.div`
display:flex;
position:relative;
align-items:center;
justify-content: center;
`
const User = styled.div`
// display:block;
color:white;
width: 50px;
height:50px;
font-size:40px;
margin-left: 20px;
margin-right: 20px;
`
const ShoppingBag = styled.div`
// display:block;
color:white;
width: 50px;
height:50px;
font-size:40px
`
const OrderNumber = styled.span`
position:absolute;
top:34px;
left:13px;
font-weight:900;
font-size: 14px;
color:#202528;
`
const picture = {
 iconUser:<FontAwesomeIcon icon={faUserCircle}/>,
 shoppingBag:<FontAwesomeIcon icon={faShoppingBag}/>
}

function Header() {
  return (
    <TopBar>
      <Logo>
        <img src={image} alt='logo' />
      </Logo>
      <RightToolBar>
        <ShoppingBag>{picture.shoppingBag}<OrderNumber>0</OrderNumber></ShoppingBag>
        <User>{picture.iconUser}</User>
      </RightToolBar>

    </TopBar>);
}
 
export default Header;