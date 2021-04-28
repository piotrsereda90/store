import React,{useState, useEffect } from 'react'

import {
  Link,
  useHistory
} from "react-router-dom";
import styled from 'styled-components';
import admin from '../../assets/image/admin.jpg';

const TopBar = styled.header`
display:flex;
position:fixed;
top:0;
left:0;
z-index:3;
width: 100vw;
padding: 10px;
background-color:#282C34;
height: 100px;
justify-content: space-between;
border-bottom: 1px solid #0f1214;

`
const LogoImg = styled.div`
margin-left: 20px;
line-height:3;
color:azure;
letter-spacing: 1px;
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
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
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
    <LogoImg>
      <h2>Admin Panel</h2>
    </LogoImg>
    <RightToolBar>
      <User
        onClick={handelUserMenu}>
        <img src={admin} alt=""/>
        {UserMenuIsOpen
        ?<UserMenu>
          <UserMenuUl>
            <UserMenuLi><UserMenuLink to='/admin/dashboard'>Admin panel</UserMenuLink></UserMenuLi> 
            <UserMenuLi onClick={handelLogIn}>{loginLabel}</UserMenuLi>
          </UserMenuUl>
        </UserMenu>
        : null}
      </User>
    </RightToolBar>

  </TopBar>
    );
}
export default Header;