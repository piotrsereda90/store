import React from 'react';

import {connect} from 'react-redux'
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReply} from '@fortawesome/free-solid-svg-icons'

const ProductContainer = styled.div`
display:flex;
background:#0f1214;
margin-left:200px;
margin-top: 90px;
min-height:calc(100vh - 90px);
`
const ProductPicture = styled.div`
display:flex;
width: 50%;
position:relative;
justify-content:center;
align-items:center;
overflow:hidden;
div{
max-width:70%;
max-height:70%;
}
img{
  display:block;
  width: 100%;
}
`
const ProductDescription = styled.div`
display:flex;
flex-direction:column;
width: 50%;
align-items:center;
div{
  color:azure;
  width:70%;
  padding:0 40px;
}
h2{
  text-align:center;
  margin-top: 100px;
  margin-bottom: 50px;
  text-transform:uppercase;
}
`
const OrderContainer = styled.div`
display:flex;
margin-top: 50px;
text-align:center;
button{
  padding: 10px 20px;
  margin: 0 20px 0 20px;
  background-color:#2f3e93;
  font-size: 20px;
  border: 2px solid #2f3e93;
  border-radius:10%;
  color:azure;
  outline:none;
}
span{
  display:block;
  line-height:3;
}
`
const style={
  color:'azure',
  fontSize:30,
  position:'absolute',
  top:20,
  left:20
}

const arrowLeft =<FontAwesomeIcon icon={faReply}/>


const Product = ({products}) => {

  const {id} = useParams()
  const filterProduct = products.filter(product => product.id === id)
  
  const product = filterProduct.map((product, key) => (
   <>
   <ProductPicture key={`product${key}`}>
       <li><Link to='/'><span style={style}>{arrowLeft}</span> </Link></li>
     <div>
      <img src={product.img} alt={product.name}/>
    </div>
  </ProductPicture>
  <ProductDescription>
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>cena 450 zł</p>
    </div>
    <OrderContainer>
      <button>-</button>
      <span>0</span>
      <button>+</button>
      <button>do koszyka</button>
    </OrderContainer>
  </ProductDescription>
  </>

  )) 

  return (
    <ProductContainer>
     {product}
    </ProductContainer>
    );
}

const mapStateToProps = (state) => ({
products: state.products.products
})
 
export default connect(mapStateToProps, null)(Product);