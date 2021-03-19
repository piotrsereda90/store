import React from 'react'

import styled from 'styled-components'
import withData from './withData'
import Products from './Products'


const ProductsContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
  `
const ProductsCard = (props) => {

  console.log(props.apiData&&props.apiData)
  return (
    <ProductsContainer>
     <Products apiData={props.apiData}/>
   </ProductsContainer>
   );
}
export default withData(ProductsCard);