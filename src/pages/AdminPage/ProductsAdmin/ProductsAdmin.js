import React,{useState, useRef} from 'react';

import HeaderAdmin from '../HeaderAdmin';
import SidebarAdmin from '../SidebarAdmin';
import SearchProduct from './SearchProduct';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import api from '../../../api';
import {fetchProducts} from '../../../components/ProductsCard/containers/redux/reducer_products';
import {fetchCategories} from '../../../components/SideBar/containers/redux/reducer_categories';
import PropTypes from 'prop-types';

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
margin: 20px 30px;
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
const EditProductContainer = styled.div`
  li{
    width: 50%;
    list-style-type:none;
    padding: 8px 10px;
    margin-top: 10px;
    border-radius: 10px;  color: azure;
    font-size: 16px;
    background-color: #2f3e93;
    cursor:pointer;
    text-align:center;
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
    cursor:pointer;
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

const ProductsAdmin = ({productsList, categories, fetchProducts, fetchCategories}) => {

!productsList.length &&fetchProducts()
!categories.length && fetchCategories()


  const [Items] = useState(productsList);
  const [filterProducts, setFilterProducts] =useState(Items);
  const [deleteProduct, setDeleteProduct] = useState({});
  const [deleteProductActionType, setDeleteProductActionType] = useState('');

  const deleteContainer = useRef();

  const searchProduct = (products) => setFilterProducts(products);

  const handelShowWindowDeleteProduct = (id, name) => {
  deleteContainer.current.style.display = 'block'
  setDeleteProduct({id,name})
  };
  const handelActionTypeDeletedProduct = (value) => setDeleteProductActionType(value);

  const handelDeleteProduct = (e) =>{
    e.preventDefault();
    if(deleteProductActionType === 'yes'){
      api.deleteProduct({deleteProduct}).then(response => console.log(response))
      deleteContainer.current.style.display = 'none'
    }else{
      deleteContainer.current.style.display = 'none'
    }
  };

  const products =  filterProducts.map(product=>{
    const {id,img, name,price,category} = product;
    return(
    <ProductContainer key={id}>
      <PictureWrapper>
        <img src={img} alt={name}/>
      </PictureWrapper>
      <div>{name}</div>
      <div>{price}</div>
      <div>{category}</div>
      <EditProductContainer>
      <li><Link to={`/admin/dashboard/products/updateProduct/${id}`} >edit</Link> </li>
      </EditProductContainer>
      <div>
        <button
          onClick={
            ()=>handelShowWindowDeleteProduct(id,name)}>
          delete
        </button>
      </div>
    </ProductContainer >
  )});
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
};

ProductsAdmin.propTypes={
  productsList: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  fetchProducts:PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  productsList: state.products.products,
  categories:state.categories.categories
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: ()=> dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsAdmin);