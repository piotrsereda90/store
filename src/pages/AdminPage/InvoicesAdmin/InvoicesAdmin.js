import React from 'react';

import styled from 'styled-components';
import HeaderAdmin from '../HeaderAdmin';
import SidebarAdmin from '../SidebarAdmin';


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


const InvoicesAdmin = () => {
  return (
    <>
    <HeaderAdmin/>
    <SidebarAdmin/>
    <Container>
   Invoices
    </Container>
  </>
   );
}
export default InvoicesAdmin;