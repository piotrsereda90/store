import React from 'react';

import{connect} from 'react-redux';
import styled from 'styled-components';
import {fetchProducts} from './containers/redux/reducer_products'
import{Link} from 'react-router-dom';

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

const Products = ({ products,fetchProducts,isLoading}) => {
    
   isLoading&&fetchProducts()
   const product = products.length&&products.map(item =>

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
  <>
    {product}
  </>
   );
}
const mapStateToProps = (state) => ({
products: state.products.products,
isLoading: state.products.isLoading
})
const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);