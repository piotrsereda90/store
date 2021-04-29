import React from 'react';

import {connect} from 'react-redux';
import OrderProduct from './OrderProduct';
import {useParams, Link} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faReply} from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
display:flex;
background:#0f1214;
margin-top: 90px;
min-height:calc(100vh - 90px);
`
const ProductWrapper = styled.div`
display:flex;
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
  padding:0 40px;
  div{
    border-top: 1px solid azure;
    padding-top:10px;
    margin-top: 20px;
  }
}
h2{
  text-align:center;
  margin-top: 100px;
  margin-bottom: 50px;
  text-transform:uppercase;
}
`
const ProductDescriptionContainer =  styled.div`
display:flex;
align-items:center;
flex-direction: column;
width: 50%;
`
const style={
  color:'azure',
  fontSize:30,
  position:'fixed',
  top:120,
  left:20
}

const arrowLeft =<FontAwesomeIcon icon={faReply}/>


const Product = ({products}) => {

  const {t}= useTranslation()
  const {id} = useParams()

  const filterProduct = products.filter(product => product.id === id)

  const product = filterProduct.map((product, key) => (
    <ProductWrapper  key={`product${key}`}>
      <ProductPicture >
        <li>
          <Link to='/'>
            <span style={style}>{arrowLeft}</span> 
          </Link>
        </li>
        <div>
         <img src={product.img} alt={product.name}/>
        </div>
      </ProductPicture>
      <ProductDescriptionContainer>
        <ProductDescription>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div></div>
            <p>{t('description.part36')} {product.price} </p>
          </div>
        </ProductDescription>
        <OrderProduct product={product}/>
      </ProductDescriptionContainer>
    </ProductWrapper>
  ))

  return (
    <Container>
     {product}
    </Container>
    );
}

const mapStateToProps = (state) => ({
products: state.products.products
})

export default connect(mapStateToProps, null)(Product);