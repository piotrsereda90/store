import React,{useState, useEffect} from 'react';

import api from '../../../api';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link, useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


const Section = styled.section`
display:flex;
justify-content: space-between;
align-items:center;
justify-content:center;
min-height: 100vh;
background-color:#202528;
`
const NewData = styled.div`
display:flex;
flex-direction:column;
margin-left: 50px;
span{
  color:azure;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 30px;
}
`
const Form =  styled.form`
display:flex;
flex-direction: column;
border-radius: 10px;
padding: 15px;
input:nth-child(9){
  overflow-y: scroll;
  height:80px;
}
`
const Title = styled.span`
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
min-width: 400px;
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
const arrowLeft = <FontAwesomeIcon icon={faReply}/>

const style={
  display:'block',
  color:'azure',
  fontSize:30,
  padding:30,
}
const UpdateProduct = ({productsList}) => {


   const[productId, handelChangeProductId] = useState('');
   const[category, handelChangeCategory] = useState('');
   const[name, handelChangeName] = useState('');
   const[description, handelChangeDescription] = useState('');
   const[amount, handelChangeAmount] = useState('');
   const[price, handelChangePrice] = useState('');


   const handelChangeFormProductId = (e) => handelChangeProductId(e.target.value)
   const handelChangeFormCategory = (e) => handelChangeCategory(e.target.value)
   const handelChangeFormName = (e) => handelChangeName(e.target.value)
   const handelChangeFormDescription = (e) => handelChangeDescription(e.target.value)
   const handelChangeFormAmount = (e) => handelChangeAmount(e.target.value)
   const handelChangeFormPrice = (e) => handelChangePrice(e.target.value)

  let history = useHistory();

  let {id} = useParams();

  const product = productsList.filter(product => product.id === id);

  const handelSubmit = (e) => {
    e.preventDefault()
    const data={productId,category,name,description,amount,price};
    const asArray= Object.entries(data);
    const filterProperties = asArray.filter(([key, value])=> value !== "");
    const objData = Object.fromEntries(filterProperties);

  return api
    .updateProduct(objData)
    .then(result=> {
      if(result.status === 200){
        alert('You updated  product')
        history.push('/admin/dashboard/products')
        }
        })
    .catch((err)=>{
      throw new Error(err)
      })
      };

const handelAddImg = () => {}

useEffect(()=>{
  product.forEach(item =>{
    const {id,category, name,description,amount,price}=item
    handelChangeProductId(id)
    handelChangeCategory(category)
    handelChangeName(name)
    handelChangeDescription(description)
    handelChangeAmount(amount)
    handelChangePrice(price)
   }
   )
},[])// eslint-disable-line react-hooks/exhaustive-deps

return (
  <Section>
    <NewData>
    <Title>New Data</Title>
  <BackToAdmin>
    <li>
      <Link to='/admin/dashboard/products'>
        <span style={style}>{arrowLeft}</span>
      </Link>
    </li>
  </BackToAdmin>
  <Form onSubmit={handelSubmit}>
    <label htmlFor='productId'></label>
    <Input
      id = 'productId'
      name='productId'
      type='text'
      placeholder='Product Id'
      onChange ={handelChangeFormProductId}
      value = {productId}
    />
    <label htmlFor='category'></label>
    <Input
      id = 'category'
      name='category'
      type='text'
      placeholder='Category'
      onChange ={handelChangeFormCategory}
      value = {category}
    />
    <label htmlFor='name'></label>
    <Input
      id = 'name'
      name='name'
      type='text'
      placeholder='Name'
      onChange ={handelChangeFormName}
      value = {name}
    />
    <ButtonAddImg onClick={handelAddImg}>Add Picture</ButtonAddImg>
     <label htmlFor='description'></label>
    <Input
      id = 'description'
      name='description'
      type='text'
      placeholder='Description'
      onChange ={handelChangeFormDescription}
      value = {description}
    />
     <label htmlFor='amount'></label>
    <Input
      id = 'amount'
      name='amount'
      type='text'
      placeholder='Amount'
      onChange ={handelChangeFormAmount}
      value = {amount}
    />
     <label htmlFor='price'></label>
    <Input
      id = 'price'
      name='price'
      type='text'
      placeholder='Price'
      onChange ={handelChangeFormPrice}
      value = {price}
    />
     <Button type="submit">Update Product</Button>
  </Form>
    </NewData>
  </Section>
)
};
UpdateProduct.propTypes = {
  productsList: PropTypes.array.isRequired
}

const mapStateToProps =(state) => ({
  productsList: state.products.products
})
export default connect(mapStateToProps, null) (UpdateProduct);
