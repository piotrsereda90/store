import React,{useState, } from 'react'
import {
  Link,
} from "react-router-dom";
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
position:relative;
width: 50px;
height:50px;
font-size:40px;
margin-left: 20px;
margin-right: 20px;
color:azure;
`
const ShoppingBag = styled.div`
width: 50px;
height:50px;
font-size:40px;
list-style-type:none;
cursor:pointer;
`
const liStyle = {
  color:'azure'
}
const OrderNumber = styled.span`
position:absolute;
top:34px;
left:13px;
font-weight:900;
font-size: 14px;
color:#202528;
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
const UserMenuLi = {
  fontSize: 16,
  listStyleType:'none',
  display:'block',
  textDecoration:'none',
  color:'azure',
  marginTop: 15,
  paddingLeft: 15

}

const picture = {
 iconUser:<FontAwesomeIcon icon={faUserCircle}/>,
 shoppingBag:<FontAwesomeIcon icon={faShoppingBag}/>
}

function Header() {
  const [loginStatus, setLoginStatus]= useState(false)
  const [UserMenuIsOpen, setUserMenuIsOpen] = useState(false)

  const handelUserMenu = () =>  setUserMenuIsOpen(prevState => !prevState)

  // const handelLoginStatus = () => {
  //   return sessionStorage.getItem('accessToken')
  //   ?setLoginStatus(true)
  //   :setLoginStatus(false)

  // }

  const loginLabel = loginStatus? 'Log out':'Log in'


  return (
    <TopBar>
      <Logo>
        <Link to='/'><img src={image} alt='logo' /></Link>
      </Logo>
      <RightToolBar>
        <ShoppingBag>
          <Link to='/dashboard/basket' style={liStyle}>{picture.shoppingBag}</Link>
          <OrderNumber>0</OrderNumber>
        </ShoppingBag>
        <User
          onClick={handelUserMenu}>
          <div>{picture.iconUser}</div>
          {UserMenuIsOpen
          ?<UserMenu>
            <UserMenuUl>
              <Link to='admin/dashboard' style={UserMenuLi}>  Admin panel</Link> 
              <li style={UserMenuLi}>{loginLabel}</li>
            </UserMenuUl>
          </UserMenu>
          : null}
        </User>
      </RightToolBar>

    </TopBar>);
}
export default Header;