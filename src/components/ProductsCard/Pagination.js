import React from 'react';

import styled from 'styled-components';

const PaginationContainer = styled.div`
width: 100%;
padding: 10px 10px 20px 10px;
margin-right: 30px;
ul{
  display:flex;
  justify-content:flex-end;
  padding:0;
  margin: 0;
  list-style:none;
  li{
    position:relative;
    color:azure;
    padding:  4px 5px;
    margin-right: 10px;
    margin-left: 10px;
    overflow:hidden;
    &:before{
      content:'';
      position:absolute;
      bottom:0;
      right:100%;
      background-color:azure;
      width: 100%;
      height: 1px;
      transition: .2s;
    }
  }
  li:hover{
    cursor:pointer;
    &:before{
      right:0;
      ::focus{
        color: red;
      }
    }
  }
}
`

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
  
  const pageNumber=[];

  for(let i =1; i<= Math.ceil(totalProducts / productsPerPage); i++){
    pageNumber.push(i);
  } 

  const pagination = pageNumber.map(number => (
    <li key={`pagination ${number}`} onClick={ ()=> paginate(number)}>
      {number}
    </li>

  ))
  return (
      <PaginationContainer>
        <ul>
          {pagination}
        </ul>
      </PaginationContainer>
   );
}
 
export default Pagination;