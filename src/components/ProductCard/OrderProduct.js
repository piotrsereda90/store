import React,{useState} from 'react';

import {connect} from 'react-redux';
import{Link} from 'react-router-dom';
import styled from 'styled-components';
import {addProductToBasket} from './containers/redux/reducer_order';

const OrderContainer = styled.div`
display:flex;
flex-direction:column;
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
  color:azure;
}
li{
  list-style-type:none;
  a{
    text-decoration:none;
    color:azure;
  }
}
`
const InfoContainer = styled.div`
margin-top: 10px;
span{
  color:red;
  text-transform: uppercase;
}

`
const ButtonContainer = styled.div`
`
const OrderProduct = ({product, addProductToBasket, orderProduct}) => {
console.log(orderProduct)
  const [showInfo, setShowInfo]=useState(false);

  const showInfoProductExist = () => (
    setShowInfo(true)
  )

  const checkProductExistInBasket = (id, product, orderProduct,addProductToBasket) => {
    const productExist = orderProduct.some( product => product.id ===id);

    productExist
    ? showInfoProductExist()
    : addProductToBasket(product)
  };
  return (
    <OrderContainer>
      <ButtonContainer>
        <button
          onClick={
          ()=>checkProductExistInBasket(product.id,product, orderProduct,addProductToBasket)}>
          dodaj do koszyka
        </button>
        <button>
          <li>
            <Link to='/dashboard/basket'>
              idź koszyka
            </Link>
          </li>
        </button>
      </ButtonContainer>
      {showInfo
       ? <InfoContainer><span>product jest już w koszyku</span></InfoContainer>
       : null
       }
  </OrderContainer>
   );
}
const mapDispatchToProps = (dispatch) => ({
addProductToBasket: (payload) => dispatch(addProductToBasket(payload))
})

const mapStateToProps = (state) => ({
  orderProduct:  state.order
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);