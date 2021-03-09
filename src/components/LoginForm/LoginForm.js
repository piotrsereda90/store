import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useFormik  } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components'

const Form =  styled.form`
display:flex;
flex-direction: column;
min-width: 23vw;
border-radius: 10px;
padding: 15px;
`
const IconUser = styled.span`
display: block;
text-align:center;
font-size: 40px;
color:#d1e1e1;
`
const SignIn = styled.span`
display:block;
color:#d1e1e1;
text-align:center;
padding: 10px 0 20px 0;
font-size: 30px;
`
const Input = styled.input`
padding: 0px 20px;
border-radius: 10px;
border:3px solid;
font-size: 20px;
min-height:54px;
&:hover {
 cursor:pointer;
 border: 3px solid #3f51b5;
}
&:hover::-webkit-input-placeholder{
  position:relative;
  top: -15px;
  transition: 0.2s ease-out;
  font-size:10px;
  color:#3f51b5;
}
&:focus {
 border: 3px solid #3f51b5;
 outline: none;
 font-size:20px;
 }
&:focus::-webkit-input-placeholder{
  position:relative;
  top: -15px;
  transition: 0.2s ease-out;
  font-size:10px;
  color:#3f51b5;
}
`
const ErrorContainer = styled.div`
min-height: 30px;
line-height:2;
margin-top:7px;
margin-left: 15px;
`
const ErrorText = styled.p`
margin: 0;
color:red;
font-size:12px;
`
const Button = styled.button`
padding: 8px 0;
margin-top: 10px;
border: none;
border-radius: 10px;
color: azure;
text-transform: upperCase;
font-size: 20px;
background-color: #2f3e93;
outline:none;
&:hover{
  background-color: #3f51b5;
  transition: .5s;
}


`
const ForgotPasswordSignIn = styled.div`
display:flex;
justify-content:space-around;
margin-top: 10px;
font-size:14px;
color: #3f51b5;
&:hover{
  cursor:pointer;
}
span:hover{
  text-decoration: underline;
}
`
const iconUser =<FontAwesomeIcon icon={faUserCircle}/>

const validationSchema = yup.object().shape({
  emailAddress: yup.string()
  .required('Email is required')
  .email('Invalid Address Email'),
  password: yup.string()
  .required('Password is required')
  .min(3, 'Password is to short, min 3 charts')
  .max(10, 'Password is to long, max 10 charts'),
});

const LoginForm = () => {

 const formik = useFormik({
   initialValues:{
     emailAddress:'',
     password: '',
   },
   validationSchema,
   onSubmit: values => {
     alert(JSON.stringify(values, null,2))
   },
 });
 const passwordError = formik.errors.password? (
   <ErrorText>{formik.errors.password}</ErrorText>
):null
 const emailError = formik.errors.emailAddress? (
  <ErrorText>{formik.errors.emailAddress}</ErrorText>
):null
return (
  <section>
  <IconUser>{iconUser}</IconUser>
  <SignIn>Sign in</SignIn>
  <Form onSubmit={formik.handleSubmit}>
    <label htmlFor='emailAdress'></label>
    <Input
      id = 'emailAddress'
      name='emailAddress'
      type='text'
      placeholder='Email Address'
      onChange ={formik.handleChange}
      value = {formik.values.emailAddress}
    />
  < ErrorContainer>{emailError}</ErrorContainer>
    <Input
      id = 'password'
      name='password'
      type='Password'
      placeholder='Password'
      onChange ={formik.handleChange}
      value = {formik.password}
    />
     < ErrorContainer>{passwordError}</ErrorContainer>
     <Button type="submit">sign in</Button>
  </Form>
  <ForgotPasswordSignIn><span>Forgot password?</span><span>Don't have an account? Sign up</span></ForgotPasswordSignIn>
  </section>
)
};


export default LoginForm;