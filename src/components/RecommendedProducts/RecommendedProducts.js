import React,{useEffect, useRef} from 'react';

import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {fetchRecommendedProducts} from './containers/redux/reducer_recommended_products';

const arrowLeft =<FontAwesomeIcon icon={faAngleLeft}/>
const arrowRight =<FontAwesomeIcon icon={faAngleRight}/>

const RecommendedProductsContainer = styled.div`
display:flex;
flex-wrap:wrap;
position:relative;
width: calc(100% - 200px);
margin-left: 200px;
background-color:#0f1214;
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
const ProductsContainer = styled.div`
display:flex;
overflow-y:hidden;
overflow-x:scroll;
&::-webkit-scrollbar{
  display:none;
}
`
const Product = styled.div`
min-width: 360px;
max-height:200px;
background-color:#282C34;
padding: 20px 10px;
border-radius: 5px;
margin:5px;
margin-left: 25px;
transition: transform 450ms;
&:hover{
  transform: scale(1.08);
  overflow:hidden;
}
li{
  list-style-type: none;
a{
  text-decoration:none;
  }
}
img{
  height: 100px;
  margin-top: 20px;
},
span{
  display:block;
  text-transform:uppercase;
  text-align:center;
  color:azure;
}
`
const ButtonLeft = styled.button`
position:absolute;
top: 80px;
left:0;
height: 61%;
outline:none;
border:none;
z-index:2;
color:azure;
margin-left: 5px;
span{
  font-size: 25px;
}
background-color:rgba(15,18,20, .3);
&&:hover{
  background-color:rgba(40,44,52, .4);
}
`
const ButtonRight = styled.button`
position:absolute;
top: 80px;
right:0;
height: 61%;
z-index:2;
outline:none;
border:none;
color:azure;
span{
  font-size: 25px;
}
background-color:rgba(15,18,20, .3);
&&:hover{
  background-color:rgba(40,44,52, .4);
}
`
const RecommendedProducts = ({products,fetchRecommendedProducts}) => {


useEffect(()=>{
  fetchRecommendedProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

const scrollContainer = useRef();
const scroll = (scrollOffset)=> {
scrollContainer.current.scrollLeft+= scrollOffset
};


  const productsRecommended = products.map(item =>
    <Product
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
   </Product>
  );
  return (
    <RecommendedProductsContainer>
      <Title>Polecane</Title>
      <ProductsContainer ref={scrollContainer}>
        <ButtonLeft onClick ={()=> scroll(780)}><span>{arrowLeft}</span></ButtonLeft>
          {productsRecommended}
        <ButtonRight  onClick ={()=> scroll(-780)}><span>{arrowRight}</span></ButtonRight>
      </ProductsContainer>
    </RecommendedProductsContainer>
   );
}
const mapStateToProps = (state) => ({
  products: state.recommendedProducts.recommendedProducts,
})
const mapDispatchToProps = (dispatch) => ({
  fetchRecommendedProducts:() =>dispatch(fetchRecommendedProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedProducts);