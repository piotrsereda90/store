import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div`
padding-top: 30px;
border-top: 1px solid red;
width: calc(100% - 200px);
margin-left: 200px;
background-color:#0f1214;
color:azure;
height: 100px;
text-align:center;
`

const Footer = () => {
  return ( 
    <FooterContainer>
      Footer
    </FooterContainer>
   );
}
 
export default Footer;