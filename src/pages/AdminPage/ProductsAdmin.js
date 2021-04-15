import React,{useState} from 'react';

import HeaderAdmin from './HeaderAdmin';
import SidebarAdmin from './SidebarAdmin';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
width:calc(100% - 200px);
display:flex;
flex-direction:column;
background-color:#0F1214;
margin-top: 90px;
margin-left: 200px;
color:'azure';
`
const SectionOne = styled.section`
display:flex;
justify-content: space-between;
align-items:center;
margin-left: 30px;
min-height: 100px;
color:azure;
letter-spacing:2px;
`
const SectionTwo = styled.section`
display:flex;
justify-content:space-evenly;
height: 200px;
width: 100%;
`
const SectionThree = styled.section`
display:flex;
flex-wrap:wrap;
margin-top: 25px;
margin-bottom: 25px;
width: 100%;
justify-content:space-evenly;
`
const ButtonContainer = styled.div`
margin-right: 30px;
button{
  padding: 8px 10px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  color: azure;
  font-size: 16px;
  outline:none;
  background-color: #2f3e93;
  &:hover{
    background-color: #3f51b5;
    transition: .5s;
  }
}

`
const PictureWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:150px;
height: 150px;
img{
  height: 70px;
  margin-top: 20px;
  &:hover{
    transform: scale(1.4);
    overflow:hidden;
  }
`
const ProductContainer = styled.div`
display:flex;
width: 100%;
align-items: center;
padding-left: 100px;
color:azure;
div{
  width:16%;
  text-align:center;
}
`
const ProductsAdmin = ({productsList}) => {

  const [Items = [...productsList], setItems] = useState([])
  console.log(Items)

  const products =  Items&&Items.map(product=>(
    <ProductContainer key={product.id}>
      <PictureWrapper>
        <img src={product.img} alt={product.name}/>
      </PictureWrapper>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>category</div>
      <div><button>edit</button></div>
      <div><button>delete</button></div>
    </ProductContainer>
  ))
  return ( 
    <>
    <HeaderAdmin/>
    <SidebarAdmin/>
    <Container>
    <SectionOne>
        <div>Products List</div>
        <ButtonContainer><button> + New Product</button></ButtonContainer>
      </SectionOne>
    <SectionTwo>
        {/* <Search productsList={productsList}/> */}
        fewfwef
      </SectionTwo>
      <SectionThree>
        {products}
      </SectionThree>
    </Container>
  </>
   );
}

const mapStateToProps = (state) => ({
  productsList: state.products.products
})

 
export default connect(mapStateToProps, null)(ProductsAdmin);