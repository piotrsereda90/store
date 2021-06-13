import React from 'react';

import styled from 'styled-components';
import{Link} from 'react-router-dom';
import admin from '../../assets/image/admin.jpg';

const Aside = styled.aside`
background-color:#282C34;
position:fixed;
top:90px;
left:0;
height:calc(100vh - 90px);
width: 200px;
`
const LinkContainer  = styled.div`
display:flex;
flex-direction:column;
padding: 0px 0 10px 20px;
ul{
  margin:0 ;
  padding: 0;
  list-style:none;
}
li{
  padding:  30px 15px 0 15px ;
  border-bottom: 3px solid transparent;
  transition: .2s;

  &:hover{
    border-bottom: 3px solid #2f3e93;
    cursor:pointer;
  }
}
a{
  text-decoration:none;
  color:azure;
  font-size:16px;
  text-transform:uppercase;
  background-color:transparent;

`
const ImgContainer = styled.div`
display:flex;
width: 100%;
height: 100px;
justify-content:center;
margin-top: 20px;
img{
  width:50%;
  height:100%;
  border-radius: 50%;
}
`
const SideBarAdmin = () => {

  return (
    <Aside>
      <ImgContainer>
        <img src={admin} alt="admin"/>
      </ImgContainer>
      <LinkContainer>
        <ul>
          <li>
            <Link to='/admin/dashboard'>Overwrite</Link>
          </li>
          <li>
            <Link to='/admin/dashboard/products'>Products</Link>
          </li>
          <li>
            <Link to='/admin/dashboard/orders'>Orders</Link>
          </li>
          <li>
            <Link to='/admin/dashboard/invoices' >invoices</Link>
          </li>
        </ul>
      </LinkContainer>
    </Aside>
  );
}

export default SideBarAdmin;