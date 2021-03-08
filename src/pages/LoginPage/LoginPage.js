import React from 'react'
import LoginForm from '../../components/LoginForm/'
import styled from 'styled-components'

const LoginWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
background-color:#202528;
min-height: 100vh;
`;

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginForm/>
    </LoginWrapper>
   );
}
 
export default LoginPage;