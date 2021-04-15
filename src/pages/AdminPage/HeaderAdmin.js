import React,{useState, useEffect } from 'react'

import{connect}from 'react-redux';
import {
  Link,
  useHistory
} from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/image/logo_deer.png';

const TopBar = styled.header`
display:flex;
position:fixed;
top:0;
left:0;
z-index:3;
width: 100vw;
padding: 10px;
background-color:#282C34;
height: 90px;
justify-content: space-between;
border-bottom: 1px solid #0f1214;

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
position:relative;
line-height:1;
width: 50px;
height:50px;
font-size:40px;
margin-left: 20px;
margin-right: 20px;
color: azure;
cursor:pointer;
&:hover{
  color: #816952;
  transition: .2s;
}
`

const UserMenu = styled.div`
position:absolute;
top:50px;
left:-110px;
width:170px;
height:90px;
background-color:#181B1E;
`
const UserMenuUl = styled.ul`
  listStyle: none;
  padding: 0;
  margin: 0;
`
const UserMenuLi = styled.li`
  display:block;
  font-size: 16px;
  list-style-type:none;
  text-decoration:none;
  color:azure;
  margin-top: 15px;
  padding-left: 15px;
  &:hover{
    color: #816952;
    transition: .2s;
  }
`
const UserMenuLink = styled(Link)`
color:azure;
text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  &:hover{
    color: #816952;
    transition: .2s;;
  }
}
`
const SearchWrapper = styled.div`
margin-right: 10px;
`
const picture = {
 iconUser:<FontAwesomeIcon icon={faUserCircle}/>,
};

function Header() {

 

  return (
    <TopBar>
      <Logo>
        <Link to='/'><img src={image} alt='logo' /></Link>
      </Logo>
      <RightToolBar>
        <SearchWrapper>
        </SearchWrapper>
      </RightToolBar>

    </TopBar>);
}

const mapStateToProps = (state) => ({
  orderList: state.order
})
export default connect(mapStateToProps, null) (Header);