import React from 'react';

import styled from 'styled-components';

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

const Products = (props) => {

   const product = props.apiData&&props.apiData.map(item =>
   <ProductContainer
      key={item.id}
   >
     <Link to={`/products/${item.id}`}>
      <span>{item.name}</span>
      <img  src={item.img} alt="zdjęcie"/>
     </Link>
   </ProductContainer>
  );
  return (
   <>
    {product}
    </>
   );
}
 
export default Products;