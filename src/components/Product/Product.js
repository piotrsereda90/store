import React,{useEffect, useState} from 'react'

import styled from 'styled-components'
import api from '../../api'

const ProductWrapper = styled.div`
  display:flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
  `
const Category = styled.div`
  display:flex;
  flex:direction:column;
  width: 23%;
  background-color:#282C34;
  padding: 20px 10px;
  border-radius: 5px;
  margin:10px;
  overflow:hidden;
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
const Product = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    api
    .accessories()
    .then(result => {
      setData(result.data.data)
      // console.log(result.data)
      console.log(data)
    })
    
  }, [])
  const accessories = data.map(item => <Category><span>{item.name}</span> <img  src={item.img} alt="zdjęcie"/></Category>)

  return (
    <ProductWrapper>
    {accessories}
   </ProductWrapper>
   );
}
export default Product;