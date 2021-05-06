import React,{useState, useEffect} from 'react';

import{connect} from 'react-redux';
import styled from 'styled-components';
import {fetchProducts} from './containers/redux/reducer_products';
import{Link} from 'react-router-dom';
import  filterCategories from '../SideBar/FilterCategories';
import Pagination from './Pagination';
import { useTranslation } from 'react-i18next';
import {device} from '../MediaQuery/MediaQuery';

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
@media ${device.tablet}{
  width: 40%;
 
}
@media ${device.mobileL}{
  width: 70%;
  overflow:hidden;
}
li{
  list-style-type: none;
a{
  text-decoration:none;
  }
}
img{
  height: 70px;
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
const MainTitle = styled.h2`
width: 100%;
color: azure;
font-size: 35px;
text-align:center;
padding: 20px;
margin-top: 30px;
margin-bottom: 20px;

`

const Products = ({ products,fetchProducts}) => {

  const {t}=useTranslation();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] =useState(12)

  useEffect(()=> {
    fetchProducts()
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  //get current posts
  const indexOfLastProduct = productsPerPage*currentPage;
  const indexOfFistProduct =  indexOfLastProduct - productsPerPage;
  const currentPosts = products.slice(indexOfFistProduct, indexOfLastProduct)


  // current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const product = currentPosts.map(item =>
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
      <MainTitle>{t('description.part9')}</MainTitle>
      {product}
      <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/>
    </>
   );
  }

  const mapStateToProps = (state) => ({
    products:  filterCategories(state.filter,state.products.products),
    paginationNumberSide: state.pagination,
})
  const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products);