import React from 'react';

import HeaderAdmin from '../HeaderAdmin';
import SidebarAdmin from '../SidebarAdmin';

import styled from 'styled-components';

const Container = styled.div`
width:calc(100% - 200px);
display:flex;
flex-direction:column;
height: calc(100vh - 90px);
background-color:#0F1214;
margin-top: 90px;
margin-left: 200px;
color:'azure';
`


const Orders = () => {
  return ( 
    <>
    <HeaderAdmin/>
    <SidebarAdmin/>
    <Container>
   Orders
    </Container>
  </>
   );
}
 
export default Orders;