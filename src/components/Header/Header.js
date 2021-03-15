import React,{useState, useEffect } from 'react'
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
color: azure;
cursor:pointer;
&:hover{
  color: #816952;
  transition: .2s;
}
`
const ShoppingBag = styled.div`
width: 50px;
height:50px;
font-size:40px;
list-style-type:none;
&:hover{
  color: #816952;
  transition: .2s;
}
`
const ShoppingBagLi = styled(Link)`
color:azure;
&:hover{
  color: #816952;
  transition: .2s;
}
`
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
const UserMenuLi = styled.li`
  display:block;
  font-size: 16px;
  list-style-type:none;
  text-decoration:none;
  color:azure;
  margin-top: 15px;
  padding-left: 15px;
  &:hover{
    color: #3f51b5;
    transition: .2s;
  }
`
const UserMenuLink = styled(Link)`
color:azure;
text-decoration: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  &:hover{
    color: #3f51b5;
    transition: .2s;;
  }
}
`
const picture = {
 iconUser:<FontAwesomeIcon icon={faUserCircle}/>,
 shoppingBag:<FontAwesomeIcon icon={faShoppingBag}/>
};

function Header() {
  const [loginStatus, setLoginStatus]= useState(false);
  const [UserMenuIsOpen, setUserMenuIsOpen] = useState(false);

  let history = useHistory()
  let session = sessionStorage.getItem('accessToken')
  const handelUserMenu = () =>  setUserMenuIsOpen(prevState => !prevState);

  const loginLabel = loginStatus? 'Log out':'Log in';

  const handelLogIn = () => {
    loginStatus&&sessionStorage.removeItem('accessToken')
    !loginStatus&& history.push('/login')
  }

  useEffect(()=>{
    return session
    ?setLoginStatus(true)
    :setLoginStatus(false)

    },[session]);

  return (
    <TopBar>
      <Logo>
        <Link to='/'><img src={image} alt='logo' /></Link>
      </Logo>
      <RightToolBar>
        <ShoppingBag>
          <li><ShoppingBagLi to='/dashboard/basket'>{picture.shoppingBag}</ShoppingBagLi></li>
          <OrderNumber>0</OrderNumber>
        </ShoppingBag>
        <User
          onClick={handelUserMenu}>
          <div>{picture.iconUser}</div>
          {UserMenuIsOpen
          ?<UserMenu>
            <UserMenuUl>
              <UserMenuLi><UserMenuLink to='admin/dashboard'>Admin panel</UserMenuLink></UserMenuLi> 
              <UserMenuLi onClick={handelLogIn}>{loginLabel}</UserMenuLi>
            </UserMenuUl>
          </UserMenu>
          : null}
        </User>
      </RightToolBar>

    </TopBar>);
}
export default Header;