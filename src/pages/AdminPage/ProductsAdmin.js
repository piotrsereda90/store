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
width: 100%;
form{
margin: 20px;
input{
  width: 400px;
  padding: 0px 20px;
  border-radius: 10px;
  border:3px solid;
  font-size: 20px;
  min-height:54px;
  &:hover {
  cursor:pointer;
  border: 3px solid #3f51b5;
  }
&:hover::-webkit-input-placeholder{
  position:relative;
  top: -15px;
  transition: 0.2s ease-out;
  font-size:10px;
  color:#3f51b5;
}
&:focus {
 border: 3px solid #3f51b5;
 outline: none;
 font-size:20px;
 }
&:focus::-webkit-input-placeholder{
  position:relative;
  top: -15px;
  transition: 0.2s ease-out;
  font-size:10px;
  color:#3f51b5;
}
  }
  select{
    width: 300px;
    padding: 0px 20px;
    border-radius: 10px;
    border:3px solid;
    font-size: 20px;
    min-height:54px;
    outline:none;
    &:hover {
    cursor:pointer;
    border: 3px solid #3f51b5;
    }
    margin-left: 20px;
  }
}
`
const SectionThree = styled.section`
display:flex;
flex-wrap:wrap;
width: 100%;
min-height: 100vh;
margin-top: 25px;
margin-bottom: 25px;
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
width:200px;
height: 140px;
overflow:hidden;
img{
  width: 120px;
  margin-top: 20px;
  }

`
const ProductContainer = styled.div`
display:flex;
width: 100%;
height: 170px;
align-items: center;
justify-content:center;
text-align:center;
color:azure;
div{
  display:flex;
  // flex-direction:column;
  width:16%;
  height: 150px;
  justify-content:center;
  background-color: #282C34;
 align-items:center;
}
button{
  width: 50%;
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
}
`
const ProductsAdmin = ({productsList, categories}) => {

  const [Items] = useState(productsList)
  const [filterProducts, setFilterProducts] =useState(Items)

  const handelChangeCategory = (e) => {
    const selectCategory = e.target.value
    let products = [...Items]
    selectCategory === 'all' 
    ? setFilterProducts(Items)
    : products = products.filter(product => product.category === selectCategory)
    setFilterProducts(products)
  }
 
  const handelChangeSearch = (e) => {
    const searchText = e.target.value.toLowerCase()
    let products = [...Items]
    products = products.filter(product => product.name.toLowerCase().includes(searchText))
    setFilterProducts(products)
  }
  const selectCategory = () => (
    <select form="categories" id="" onChange={handelChangeCategory}>
      {categories.map((category, key) => (
        <option key={`category${key}`}value={category.category}>{category.category}</option>
      ))}
    </select>
  )

  const products =  filterProducts.map(product=>(
    <ProductContainer key={product.id}>
      <PictureWrapper>
        <img src={product.img} alt={product.name}/>
      </PictureWrapper>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
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
     <form id='categories' >
       <input onChange={handelChangeSearch}type='text' placeholder='Search product' />
      {selectCategory()}
     </form>
      </SectionTwo>
      <SectionThree>
        {products}
      </SectionThree>
    </Container>
  </>
   );
}

const mapStateToProps = (state) => ({
  productsList: state.products.products,
  categories :state.categories.categories
})

 
export default connect(mapStateToProps, null)(ProductsAdmin);