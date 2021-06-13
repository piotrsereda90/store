import React,{useState} from 'react';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {connect} from 'react-redux';
import{Link} from 'react-router-dom';
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
button{
  &:hover{
    cursor:pointer;
  }
}
`
const OrderProduct = ({product, addProductToBasket, orderProduct}) => {

  const {t}=useTranslation();

  const [showInfoProductInCard, setShowInfoProductInCard]=useState(false);
  const [showInfoProductAddToCard, setShowInfoProductAddToCard] = useState(false)


  const showInfoProductExist = () => (
    setShowInfoProductInCard(true)
  )

  const showInfoProductAddedCard = () => {
    setShowInfoProductAddToCard(true)
  }

  const checkProductExistInBasket = (id, product, orderProduct,addProductToBasket) => {
    const productExist = orderProduct.some( product => product.id ===id);

    showInfoProductAddedCard()

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
          {t('description.part37')}
        </button>
        <button>
          <li>
            <Link to='/dashboard/basket'>
            {t('description.part38')}
            </Link>
          </li>
        </button>
      </ButtonContainer>
      {showInfoProductInCard
       ? <InfoContainer><span>{t('description.part39')}</span></InfoContainer>
       : null
       }
       {showInfoProductAddToCard && !showInfoProductInCard
       ? <InfoContainer><span>{t('description.part51')}</span></InfoContainer>
       : null
       }
  </OrderContainer>
   );
}
const mapDispatchToProps = (dispatch) => ({
addProductToBasket: (payload) => dispatch(addProductToBasket(payload))
})

const mapStateToProps = (state) => ({
  orderProduct: state.order
})
export default connect(mapStateToProps, mapDispatchToProps)(OrderProduct);