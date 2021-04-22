import React,{useState, useRef} from 'react';

import HeaderAdmin from '../HeaderAdmin';
import SidebarAdmin from '../SidebarAdmin';
import SearchProduct from './SearchProduct';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import api from '../../../api';

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
`
const AddProductContainer = styled.div`
margin-right: 30px;

  li{
    list-style-type:none;
    padding: 8px 10px;
    margin-top: 10px;
    border-radius: 10px;  color: azure;
    font-size: 16px;
    background-color: #2f3e93;
    cursor:pointer;
    a{
      color:azure;
      text-decoration:none;
    }
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
const ProductContainer  = styled.div`
display:flex;
width: 100%;
height: 100px;
justify-content:center;
color:azure;
div{
  display:flex;
  width:16%;
  height: 90px;
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
const DeleteProductWindow = styled.form`
position:fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: #0F1214;
color:azure;
width:380px;
height:150px;
display:none;
padding: 20px;
button{
  position: absolute;
  right:100px;
  bottom: 20px;
  padding: 8px 10px;
  border: none;
  border-radius: 10px;
  color: azure;
  font-size: 16px;
  outline:none;
  background-color: #2f3e93;
  text-transform: uppercase;
  &:hover{
    background-color: #3f51b5;
    transition: .5s;
  }
}
button+button{
  position: absolute;
  right:30px;
  bottom: 20px;
  min-width:52.02px;
  padding: 8px 10px;
  border: none;
  border-radius: 10px;
  color: azure;
  font-size: 16px;
  outline:none;
  background-color: #2f3e93;
  text-transform: uppercase;
  &:hover{
    background-color: #3f51b5;
    transition: .5s;
  }
}

`
const ProductsAdmin = ({productsList, categories}) => {

  const [Items] = useState(productsList)
  const [filterProducts, setFilterProducts] =useState(Items)
  const [deleteProduct, setDeleteProduct] = useState({})
  const [deleteProductActionType, setDeleteProductActionType] = useState('')

  const deleteContainer = useRef();

  const searchProduct = (products) => setFilterProducts(products)

 
  const handelShowWindowDeleteProduct = (id, name) => {
  deleteContainer.current.style.display = 'block'
  setDeleteProduct({id,name})
  }
  const handelActionTypeDeletedProduct = (value) => setDeleteProductActionType(value)

  const handelDeleteProduct = (e) =>{
    e.preventDefault();
    if(deleteProductActionType === 'yes'){
      api.deleteProduct({deleteProduct}).then(response => console.log(response))
      deleteContainer.current.style.display = 'none'
    }else{
      deleteContainer.current.style.display = 'none'
    }
}


  const products =  filterProducts.map(product=>(
    <ProductContainer key={product.id}>
      <PictureWrapper>
        <img src={product.img} alt={product.name}/>
      </PictureWrapper>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.category}</div>
      <div><button>edit</button></div>
      <div>
        <button
          onClick={
            ()=>handelShowWindowDeleteProduct(product.id, product.name)}>
          delete
        </button>
      </div>
    </ProductContainer >
  ))
  return (
    <>
    <HeaderAdmin/>
    <SidebarAdmin/>
    <Container>
    <SectionOne>
        <div>Products List</div>
        <AddProductContainer><li><Link to='/admin/dashboard/products/addProduct'>+ New Product</Link> </li></AddProductContainer>
      </SectionOne>
    <SectionTwo>
      <SearchProduct productsList={productsList}searchProduct={searchProduct} categories={categories}/>
    </SectionTwo>
    <SectionThree>
      {products}
    </SectionThree>
      <DeleteProductWindow
        onSubmit={
           handelDeleteProduct}
          ref={deleteContainer }
          >
        <p>Are you sure you want to remove this  product ?</p>
        <span>{deleteProduct.name}</span>
        <button onClick={()=>handelActionTypeDeletedProduct('yes')} >yes</button>
        <button  onClick={()=>handelActionTypeDeletedProduct('no')}>no</button>
      </DeleteProductWindow>
    </Container>
  </>
   );
}

const mapStateToProps = (state) => ({
  productsList: state.products.products,
  categories :state.categories.categories
})

export default connect(mapStateToProps, null)(ProductsAdmin);