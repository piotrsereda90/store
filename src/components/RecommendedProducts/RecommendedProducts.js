import React from 'react';

import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const RecommendedProductsContainer = styled.div`
display:flex;
flex-wrap:wrap;
width: calc(100% - 200px);
margin-left: 200px;
justify-content:center;
align-items:center;
background-color:#0f1214;
border-top: 1px solid red;
padding-bottom: 30px;
`
const Title = styled.h2`
font-size:30px;
width: 100%;
padding: 20px;
color:azure;
text-transform:uppercase;
text-align:center;
`
const ProductContainer = styled.div`
display:flex;
flex:direction:column;
width: 23%;
max-height:200px;
background-color:#282C34;
padding: 20px 10px;
border-radius: 5px;
margin:10px;
overflow:hidden;
li{
  list-style-type: none;
a{
  text-decoration:none;
  }
}
img{
  height: 100px;
  margin-top: 20px;
  &:hover{
    transform: scale(1.4);
    overflow:hidden;
  }
},
span{
  display:block;
  text-transform:uppercase;
  text-align:center;
  color:azure;
}
`

const RecommendedProducts = ({products}) => {

  const selectProducts = products.slice(0, 3)

  const recommendedProducts = selectProducts.map(item =>
    <ProductContainer
      key={item.id}
    >
      <ul>
        <li>
          <Link to={`/product/${item.id}`}>
            <span>{item.name}</span>
            <img  src={item.img} alt={item.name}/>
          </Link>
        </li>
      </ul>
   </ProductContainer>
  );
  return ( 
    <RecommendedProductsContainer>
      <Title>Polecane</Title>
      {recommendedProducts}
    </RecommendedProductsContainer>
   );
}
const mapStateToProps = (state) => ({
  products: state.products.products
})
const mapDispatchToProps = (dispatch) => ({})
 
export default connect(mapStateToProps, mapDispatchToProps)(RecommendedProducts);