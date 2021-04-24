import React,{useState} from 'react';

import api from '../../api/';
import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link, useHistory, useParams } from "react-router-dom";


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
const CurrentData = styled.div`
display:flex;
flex-direction:column;
width: 400px;
margin-right: 50px;
div{
padding: 0px 20px;
border-radius: 10px;
border:3px solid;
font-size: 16px;
height:40px;
min-width: 400px;
line-height:2;
margin-top:3px;
}
div:nth-child(6){
  overflow-y: scroll;
  height:120px;
}
div:nth-child(2){
  margin-top: 15px;
}
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

  function useInput(initialValue=''){
    const [value, setValue] = useState('');
    const handelChange = (e) => {
      setValue(e.target.value);
    };
    return[value, handelChange];
   };

   const[productId, handelChangeProductId] = useInput('');
   const[category, handelChangeCategory] = useInput('');
   const[name, handelChangeName] = useInput('');
   const[description, handelChangeDescription] = useInput('');
   const[amount, handelChangeAmount] = useInput('');
   const[price, handelChangePrice] = useInput('');

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
 const productCurrentProperties = product.map(item =>{

 const {id,category, name,img,description,amount,price}=item

 return(
  <React.Fragment key={id}>
    <div>{id}</div>
    <div>{category}</div>
    <div>{name}</div>
    <div>{img}</div>
    <div>{description}</div>
    <div>{amount}</div>
    <div>{price}</div>
  </React.Fragment>
 )
}
)
return (
  <Section>
    <CurrentData>
    <Title>Current Data</Title>
      {productCurrentProperties}
    </CurrentData>
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
      onChange ={handelChangeProductId}
      value = {productId}
    />
    <label htmlFor='category'></label>
    <Input
      id = 'category'
      name='category'
      type='text'
      placeholder='Category'
      onChange ={handelChangeCategory}
      value = {category}
    />
    <label htmlFor='name'></label>
    <Input
      id = 'name'
      name='name'
      type='text'
      placeholder='Name'
      onChange ={handelChangeName}
      value = {name}
    />
    <ButtonAddImg onClick={handelAddImg}>Add Picture</ButtonAddImg>
     <label htmlFor='description'></label>
    <Input
      id = 'description'
      name='description'
      type='text'
      placeholder='Description'
      onChange ={handelChangeDescription}
      value = {description}
    />
     <label htmlFor='amount'></label>
    <Input
      id = 'amount'
      name='amount'
      type='text'
      placeholder='Amount'
      onChange ={handelChangeAmount}
      value = {amount}
    />
     <label htmlFor='price'></label>
    <Input
      id = 'price'
      name='price'
      type='text'
      placeholder='Price'
      onChange ={handelChangePrice}
      value = {price}
    />
     <Button type="submit">Update Product</Button>
  </Form>
    </NewData>
  </Section>
)
};

const mapStateToProps =(state) => ({
  productsList: state.products.products
})
export default connect(mapStateToProps, null) (UpdateProduct);
