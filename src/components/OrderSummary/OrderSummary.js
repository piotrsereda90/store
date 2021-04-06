import React,{useState} from 'react';

import api from '../../api/';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useFormik  } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const Section = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
min-height: 100vh;
background-color:#202528;
div{
  span{
    color:azure;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 30px;
  }
}

`
const Form =  styled.form`
display:flex;
flex-direction: column;
border-radius: 10px;
padding: 15px;
`
const IconUser = styled.span`
display: block;
text-align:center;
font-size: 40px;
color:#d1e1e1;
`
const OrderData = styled.span`
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
font-size: 16px;
min-height:40px;
min-width: 300px;
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
min-height: 20px;
line-height:2;
margin-top:7px;
margin-left: 15px;
`
const ErrorText = styled.p`
margin: 0;
color:red;
font-size:10px;
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


const iconUser =<FontAwesomeIcon icon={faUserCircle}/>

const validationSchema = yup.object().shape({
  emailAddress: yup.string()
  .required('Email is required')
  .email('Invalid Address Email'),
  name: yup.string()
  .required('Name is required'),
  postCode: yup.string()
  .required('Post code is required'),
  city: yup.string()
  .required('City is required'),
  street: yup.string()
  .required('Street is required'),
  houseNumber: yup.string()
  .required('House number is required'),
  contactPhone: yup.string()
  .required('Contact phone is required'),
});

const OrderSummary = ({order}) => {

  const [finishView, setFinishView] = useState(true)

 const formik = useFormik({
   initialValues:{
     emailAddress:'',
     name: '',
     lastName:'',
     postCode:'',
     city:'',
     street:'',
     houseNumber:'',
     contactPhone: ''
  
   },
   validationSchema,
   onSubmit: values => {
    return api
    .orders(
      values.emailAddress,
      values.name,
      values.postCode,
      values.city,
      values.street,
      values.houseNumber,
      values.contactPhone,
      {order}
    
      )
    .then(result=> {
     if(result.status === 200){
       setFinishView(false)
     }
    })
    .catch((err)=>{
      throw new Error(err)
    })
  },
 });
 const emailError = formik.errors.emailAddress? (
  <ErrorText>{formik.errors.emailAddress}</ErrorText>
):null
const nameError = formik.errors.name? (
  <ErrorText>{formik.errors.name}</ErrorText>
):null
const postCodeError = formik.errors.postCode? (
  <ErrorText>{formik.errors.postCode}</ErrorText>
):null
const cityError = formik.errors.city? (
  <ErrorText>{formik.errors.city}</ErrorText>
):null
const streetError = formik.errors.street? (
  <ErrorText>{formik.errors.street}</ErrorText>
):null
const houseNumberError = formik.errors.houseNumber? (
  <ErrorText>{formik.errors.houseNumber}</ErrorText>
):null
const contactPhoneError = formik.errors.contactPhone? (
  <ErrorText>{formik.errors.contactPhone}</ErrorText>
):null

return (
  finishView ?<Section>
  <IconUser>{iconUser}</IconUser>
  <OrderData>Dane zamawiajacego</OrderData>
  <Form onSubmit={formik.handleSubmit}>
    <label htmlFor='emailAdress'></label>
    <Input
      id = 'emailAddress'
      name='emailAddress'
      type='text'
      placeholder='E-mail'
      onChange ={formik.handleChange}
      value = {formik.values.emailAddress}
    />
  < ErrorContainer>{emailError}</ErrorContainer>
    <label htmlFor='name'></label>
    <Input
      id = 'name'
      name='name'
      type='text'
      placeholder='Nazwisko'
      onChange ={formik.handleChange}
      value = {formik.values.name}
    />
    <ErrorContainer>{nameError}</ErrorContainer>
    <label htmlFor='postCode'></label>
    <Input
      id = 'postCode'
      name='postCode'
      type='text'
      placeholder='kod pocztowy'
      onChange ={formik.handleChange}
      value = {formik.values.postCode}
    />
    <ErrorContainer>{postCodeError}</ErrorContainer>
    <label htmlFor='city'></label>
    <Input
      id = 'city'
      name='city'
      type='text'
      placeholder='Miasto'
      onChange ={formik.handleChange}
      value = {formik.values.city}
    />
    <ErrorContainer>{cityError}</ErrorContainer>
     <label htmlFor='street'></label>
    <Input
      id = 'street'
      name='street'
      type='text'
      placeholder='Ulica'
      onChange ={formik.handleChange}
      value = {formik.values.street}
    />
    <ErrorContainer>{streetError}</ErrorContainer>
     <label htmlFor='houseNumber'></label>
    <Input
      id = 'houseNumber'
      name='houseNumber'
      type='text'
      placeholder='Numer domu/mieszkania'
      onChange ={formik.handleChange}
      value = {formik.values.houseNumber}
    />
    <ErrorContainer>{houseNumberError}</ErrorContainer>
     <label htmlFor='contactPhone'></label>
    <Input
      id = 'contactPhone'
      name='contactPhone'
      type='text'
      placeholder='Numer kontaktowy'
      onChange ={formik.handleChange}
      value = {formik.values.contactPhone}
    />
     <ErrorContainer>{contactPhoneError}</ErrorContainer>
     <Button type="submit">Złóż zamówienie</Button>
  </Form>
  </Section>
  :<Section><div><span>dziękujemy zazłożenie zamowienia :)</span></div></Section>
)
};
const mapStateToProps = (state) =>({
  order: state.order
}) 

export default connect(mapStateToProps, null)(OrderSummary);
