import React from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import {connect} from 'react-redux';
import {Link }from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply } from '@fortawesome/free-solid-svg-icons';
import {addProductAmount,removeProductAmount, removeProductFromBasket } from '../ProductCard/containers/redux/reducer_order';

const BasketContainer = styled.div`
display:flex;
flex-wrap:wrap;
color:azure;
margin-top: 90px;
min-height: calc(100vh - 90px);
background-color: #0F1214;
a{
    text-decoration:none;
    padding: 10px 20px;
    height: 40px;
    text-transform: uppercase;
    letter-spacing: 1px;
}
span{
  color:azure;
  padding: 10px 20px;
}
`
const OrderWrapper = styled.div`
display:flex;
flex-wrap:wrap;
width: 100%;
margin-left: 70px;
padding: 20px;
max-height: 150px;
`
const PictureWrapper = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 150px;
margin-right: 50px;
img{
  display:block;
  width: 100%;
  
}
`
const OrderListContainer = styled.div`
display:flex;
width: 100%;
flex-wrap:wrap;
margin-top: 100px;
`
const BackToShop = styled.div`
display:flex;
position:fixed;
top:80px;
left:0;
li{
  list-style-type:none;
}
`
const ButtonWrapper  = styled.div`
display:flex;
justify-content:center;
align-items:center;

button{
display:block;
padding: 5px 15px;
background-color:#2f3e93;
border: none;
border-radius: 10px;
color: azure;
outline:none;
}
span{
display:block;
padding:0 10px;
}
`
const ButtonRemove = styled.button`
margin-left: 15px;
`

const arrowLeft = <FontAwesomeIcon icon={faReply}/>
const style={
  display:'block',
  color:'azure',
  fontSize:30,
  padding:30,
}
const Basket = ({orderList, addProductAmount, removeProductAmount, removeProductFromBasket}) => {

  const {t}=useTranslation();

  const order =  orderList.map((item, key) => (

  <OrderWrapper key={`${item.id + key}`}>
    <PictureWrapper>
      <img src={item.img} alt='product'/>
    </PictureWrapper>
    <ButtonWrapper>
      <button
        disabled={item.amount === 0
          ? true
          : false }
        onClick={()=>removeProductAmount(item.id)}>
        -
        </button>
      <span>{item.amount}</span>
      <button
        onClick={() =>addProductAmount(item.id)}>
        +
      </button>
      <ButtonRemove
        onClick={()=>removeProductFromBasket(item.id)}>
        {t('description.part40')}
      </ButtonRemove>
    </ButtonWrapper>
  </OrderWrapper>
  ))

  return (
    <>
      <Header/>
      <BasketContainer>
        <BackToShop>
          <li><Link to='/'><span style={style}>{arrowLeft}</span></Link></li>
        </BackToShop>
        <OrderListContainer >
          {order}
        </OrderListContainer>
        {orderList.length
        ? <Link to='/order/summary'> <span> {t('description.part41')} </span></Link>
        : null}
      </BasketContainer>
   </>
   );
}
const mapStateToProps = (state) => ({
  orderList: state.order
})

const mapDispatchToProps = (dispatch) => ({
  addProductAmount: (id) => dispatch(addProductAmount(id)),
  removeProductAmount: (id) => dispatch(removeProductAmount(id)),
  removeProductFromBasket: (id) => dispatch(removeProductFromBasket(id))
})

export default connect(mapStateToProps ,mapDispatchToProps)(Basket);