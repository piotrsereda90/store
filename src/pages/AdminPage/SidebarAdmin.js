import React from 'react';

import styled from 'styled-components';
import{Link} from 'react-router-dom';

const Aside = styled.aside`
background-color:#282C34;
position:fixed;
top:90px;
left:0;
height:800px;
width: 200px;
`
const LinkContainer  = styled.div`
display:flex;
flex-direction:column;
padding: 20px 0 10px 20px;
// position:relative;
// overflow:hidden;
margin-top: 20px;
ul{
  margin:0 ;
  padding: 0;
  list-style:none;
}
li{

  padding:  30px 15px 0 15px ;
  border-bottom: 3px solid transparent;
  transition: .2s;
  // &:focus {
  //   border-bottom: 3px solid #2f3e93;
  // }
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
const SideBarAdmin = () => {

  return (
     <Aside>
       <div>
         dupaoasndsaihf
       </div>
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