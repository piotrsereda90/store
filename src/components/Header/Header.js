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
const ShoppingBag = styled.div`
width: 50px;
height:50px;
line-height:1;
font-size:40px;
list-style-type:none;
`
const ShoppingBagLi = styled(Link)`
color:azure;
position:relative;
&:hover{
  color: #816952;
  transition: .2s;
}
`
const OrderAmount = styled.span`
position:absolute;
top:25px;
left:14px;
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
 shoppingBag:<FontAwesomeIcon icon={faShoppingBag}/>
};

function Header({orderList}) {

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
        <SearchWrapper>
          {/* <Search/> */}
        </SearchWrapper>
        <ShoppingBag>
          <li>
            <ShoppingBagLi to='/dashboard/basket'>
              {picture.shoppingBag}
              <OrderAmount>
                {orderList.length}
              </OrderAmount>
            </ShoppingBagLi>
          </li>
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

const mapStateToProps = (state) => ({
  orderList: state.order
})
export default connect(mapStateToProps, null) (Header);