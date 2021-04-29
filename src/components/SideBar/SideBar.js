import React,{useEffect} from 'react';

import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchCategories} from './containers/redux/reducer_categories';
import FilterButton from './FilterButton';
import { useTranslation } from 'react-i18next';

const Aside = styled.aside`
background-color:#282C34;
position:fixed;
top:90px;
left:0;
height:calc(100vh - 90px);
width: 200px;
`
const ButtonContainer  = styled.div`
display:flex;
flex-direction:column;
padding: 20px 0 10px 20px;
position:relative;
overflow:hidden;
margin-top: 20px;
button{
  padding:  30px 15px 0 15px ;
  color:azure;
  font-size:16px;
  text-transform:uppercase;
  background-color:transparent;
  text-align:left;
  border: none;
  border-bottom: 3px solid transparent;
  transition: .2s;
&:focus {
  outline: none;
  border-bottom: 3px solid #2f3e93;
}
&:hover{
  border-bottom: 3px solid #2f3e93;
  cursor:pointer;
 }

`

const SideBar = ({fetchCategories, categories}) => {

 const {t}= useTranslation();

  useEffect(() =>{
    fetchCategories()
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  const category = categories.map((item, key)=>(
    <FilterButton  key={`category${key}`} filter={item.category}>
      {t(`description.part${++key}`)}
    </FilterButton>
  ))

  return (
     <Aside>
       <ButtonContainer>
         {category}
       </ButtonContainer>
     </Aside>
     );
}
 const mapStateToProps = (state) => ({
   categories: state.categories.categories,
 });
 const mapDispatchToProps = (dispatch) => ({
   fetchCategories: () => dispatch(fetchCategories())
 });
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);