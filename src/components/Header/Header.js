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
import { useTranslation } from 'react-i18next';
import  England from '../../assets/image/England.png';
import  Poland from '../../assets/image/Poland.png';
import  German from '../../assets/image/Germany.png';

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
margin-right: 350px;
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
  color: #2f3e93;
  transition: .2s;
}
`
const ShoppingBag = styled.div`
width: 50px;
height:50px;
line-height:1;
font-size:40px;
list-style-type:none;
margin-left: 30px;
`

const StoreName = styled(Link)`
  text-decoration:none;
    a{
      text-decoration:none;
      color:#0F1214;
    }
  h1{
    font-size: 70px;
    font-family: 'Nanum Brush Script', cursive; 
  }
`
const ShoppingBagLi = styled(Link)`
color:azure;
position:relative;
&:hover{
  color: #2f3e93;
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
const FlagWrapper = styled.div`
button{
  width: 30px;
  height: 20px;
  margin-right:10px;
  overflow:hidden;
  &:hover{
    cursor:pointer;
  }
}
`
const picture = {
 iconUser:<FontAwesomeIcon icon={faUserCircle}/>,
 shoppingBag:<FontAwesomeIcon icon={faShoppingBag}/>
};
function Header({orderList}) {
  const {i18n}= useTranslation();

  const lngs = {
    en: { nativeName: <img src={England} alt="EnglandFlag"/> },
    de: { nativeName: <img src={German} alt="GermanFlag"/> },
    pl: { nativeName: <img src={Poland} alt="PolandFlag"/>}
  };

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
        <Link to='/'><img src={image} alt='logo' /></Link>
      </LogoImg>
      <StoreName>
      <Link to='/'><h1>Giwera.com</h1></Link>
      </StoreName>
      <RightToolBar>
      <FlagWrapper>
        {Object.keys(lngs).map((lng) => (
         <button key={lng} type="submit" onClick={() => i18n.changeLanguage(lng)}>
          <span>{lngs[lng].nativeName}</span>
        </button>
      ))}
      </FlagWrapper>
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
              <UserMenuLi><UserMenuLink to='/admin/dashboard'>Admin panel</UserMenuLink></UserMenuLi> 
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