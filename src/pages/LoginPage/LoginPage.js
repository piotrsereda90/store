import React from 'react'
import LoginForm from '../../components/LoginForm/'
import styled from 'styled-components'

const LoginWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin-top: -120px;
background-color:#202528;
min-height: calc(100vh + 120px);
`;

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginForm/>
    </LoginWrapper>
   );
}
 
export default LoginPage;