import React from 'react'

import styled from 'styled-components'
import{
  Link
} from 'react-router-dom'

const Aside = styled.aside`
background-color:#282C34;
position:fixed;
top:90px;
left:0;
height:800px;
width: 200px;
`

const SideBar = () => {
  return (
     <Aside>
       <ul>
         <li><Link to=''>broń długa</Link></li>
         <li><Link to=''>broń krótka</Link></li>
         <li><Link to=''>broń myśliwska</Link></li>
         <li><Link to=''>broń maszynowa</Link></li>
         <li><Link to=''>broń kolekcjonerska</Link></li>
         <li><Link to=''>wiatrówki</Link></li>
         <li><Link to=''>noże</Link></li>
       </ul>
     </Aside>
     );
}
 
export default SideBar;