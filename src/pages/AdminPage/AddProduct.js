import React from 'react';

import api from '../../api/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faReply} from '@fortawesome/free-solid-svg-icons';
import { useFormik  } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';
import { Link, useHistory } from "react-router-dom";


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
const ButtonAddImg = styled.button`
padding: 0px 20px;
border-radius: 10px;
border:3px solid;
font-size: 16px;
min-height:40px;
min-width: 300px;
text-align:left;
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
`
const BackToAdmin = styled.div`
display:flex;
position:fixed;
top:0;
left:0;
li{
  list-style-type:none;
}
`
const iconUser =<FontAwesomeIcon icon={faUserCircle}/>
const arrowLeft = <FontAwesomeIcon icon={faReply}/>

const validationSchema = yup.object().shape({
  productId: yup.string()
  .required('Product Id is required'),
  category: yup.string()
  .required('Category is required'),
  name: yup.string()
  .required('Name is required'),
  description: yup.string()
  .required('Description is required'),
  amount: yup.string()
  .required('Amount is required'),
  price: yup.string()
  .required('Price is required'),
});
const style={
  display:'block',
  color:'azure',
  fontSize:30,
  padding:30,
}
const AddProduct = () => {

  let history = useHistory();

  const formik = useFormik({
   initialValues:{
     productId:'',
     category:'',
     name: '',
     description:'',
     amount:'',
     price:'',
   },
   validationSchema,
   onSubmit: values => {
    return api
    .addProduct({values})
    .then(result=> {
      if(result.status === 200){
        alert('You added new product')
        history.push('/admin/dashboard/products')
      }
     })
    .catch((err)=>{
      throw new Error(err)
    })
  },
 });
 const productIdError = formik.errors.productId? (
  <ErrorText>{formik.errors.productId}</ErrorText>
):null
const categoryError = formik.errors.category? (
  <ErrorText>{formik.errors.category}</ErrorText>
):null
const nameError = formik.errors.name? (
  <ErrorText>{formik.errors.name}</ErrorText>
):null
const descriptionError = formik.errors.description? (
  <ErrorText>{formik.errors.description}</ErrorText>
):null
const amountError = formik.errors.amount? (
  <ErrorText>{formik.errors.amount}</ErrorText>
):null
const priceError = formik.errors.price? (
  <ErrorText>{formik.errors.price}</ErrorText>
):null
return (
  <Section>
  <IconUser>{iconUser}</IconUser>
  <OrderData>Add Product</OrderData>
  <BackToAdmin>
    <li>
      <Link to='/admin/dashboard/products'>
        <span style={style}>{arrowLeft}</span>
      </Link>
    </li>
  </BackToAdmin>
  <Form onSubmit={formik.handleSubmit}>
    <label htmlFor='productId'></label>
    <Input
      id = 'productId'
      name='productId'
      type='text'
      placeholder='Product Id'
      onChange ={formik.handleChange}
      value = {formik.values.productId}
    />
    <ErrorContainer>{productIdError}</ErrorContainer>
    <label htmlFor='category'></label>
    <Input
      id = 'category'
      name='category'
      type='text'
      placeholder='Category'
      onChange ={formik.handleChange}
      value = {formik.values.category}
    />
    <ErrorContainer>{categoryError}</ErrorContainer>
    <label htmlFor='name'></label>
    <Input
      id = 'name'
      name='name'
      type='text'
      placeholder='Name'
      onChange ={formik.handleChange}
      value = {formik.values.name}
    />
    <ErrorContainer>{nameError}</ErrorContainer>
    <ButtonAddImg>Add Picture</ButtonAddImg>
    <ErrorContainer>{}</ErrorContainer>
     <label htmlFor='description'></label>
    <Input
      id = 'description'
      name='description'
      type='text'
      placeholder='Description'
      onChange ={formik.handleChange}
      value = {formik.values.description}
    />
    <ErrorContainer>{descriptionError}</ErrorContainer>
     <label htmlFor='amount'></label>
    <Input
      id = 'amount'
      name='amount'
      type='text'
      placeholder='Amount'
      onChange ={formik.handleChange}
      value = {formik.values.amount}
    />
    <ErrorContainer>{amountError}</ErrorContainer>
     <label htmlFor='price'></label>
    <Input
      id = 'price'
      name='price'
      type='text'
      placeholder='Price'
      onChange ={formik.handleChange}
      value = {formik.values.price}
    />
     <ErrorContainer>{priceError}</ErrorContainer>
     <Button type="submit">Add Product</Button>
  </Form>
  </Section>
)
};


export default AddProduct;
