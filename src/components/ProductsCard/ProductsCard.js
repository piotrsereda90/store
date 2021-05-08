import React from 'react';

import styled from 'styled-components';
import Products from './Products';


const ProductsContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
  min-height: 80vh;
  `
const ProductsCard = () => {

  return (
    <ProductsContainer>
     <Products/>
   </ProductsContainer>
   );
}
export default ProductsCard;