import React from 'react';

import HeaderAdmin from './HeaderAdmin';
import SidebarAdmin from './SidebarAdmin';
import styled from 'styled-components';


const Container = styled.div`
width:calc(100% - 200px);
display:flex;
flex-direction:column;
background-color:#0F1214;
margin-top: 90px;
margin-left: 200px;

`
const SectionOne = styled.section`
display:flex;
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
// background-color: green;
div{
  padding: 10px;
  border:2px solid white;
  width: 23%;
  height: 100%;
  color:azure;
}
`
const SectionThree = styled.section`
display:flex;
margin-top: 25px;
margin-bottom: 25px;
height: 400px;
width: 100%;
justify-content:space-evenly;
`
const SectionThreeLeft = styled.div`
width: 75%;
border:2px solid white;
`
const SectionThreeRight = styled.div`
width: 20%;
border:2px solid white;
`
const SectionFour = styled.section`
display:flex;
justify-content:space-evenly;
height: 300px;
width: 100%;
margin-bottom: 25px;
`
const SectionFourRight = styled.div`
width: 75%;
border:2px solid white;
`
const SectionFourLeft = styled.div`
width: 20%;
border:2px solid white;
`
const AdminPage = () => {
  return (
  <>
    <HeaderAdmin/> 
    <SidebarAdmin />
    <Container>
      <SectionOne>
        Overview
      </SectionOne>
    <SectionTwo>
        <div>rthrth</div>
        <div>rhtrh</div>
        <div>trh</div>
        <div>htrh</div>
      </SectionTwo>
      <SectionThree>
        <SectionThreeLeft>main secion 60%</SectionThreeLeft>
        <SectionThreeRight>main secion right 20%</SectionThreeRight>
      </SectionThree>
      <SectionFour>
        <SectionFourLeft>last secion 20%</SectionFourLeft>
        <SectionFourRight>main secion left 60%</SectionFourRight>
      </SectionFour>
    </Container>
  </>
   );
}
export default AdminPage;