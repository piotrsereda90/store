import React from 'react';

import HeaderAdmin from './HeaderAdmin';
import SidebarAdmin from './SidebarAdmin';
import styled from 'styled-components';
import CategoryChart from './CategoryChart';
import BreakDownChart from './BreakDownChart';
import arrowUp from '../../assets/image/arrow-grow.png'


const Container = styled.div`
width:calc(100% - 200px);
min-height: 100vh;
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
margin-bottom: 30px;
min-height: 100px;
color:azure;
letter-spacing:2px;
`
const SectionTwo = styled.section`
display:flex;
justify-content:space-evenly;
height: 150px;
width: 100%;
`
const SectionTwoItem = styled.div`
display:flex;
border: 1px solid azure;
width: 23%;
border:1px solid azure;
color:azure;
background-color: #282C34;
div{
  width: 50%;
  padding-top: 30px;
  padding-left: 20px;
  p{
    letter-spacing: 1px;
    padding: 5px;
    }
  }
  div+div{
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom: 20px;
  }
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
width: 70%;
border:1px solid white;
background-color: #282C34;
`
const SectionThreeRight = styled.div`
width: 25%;
border:1px solid white;
background-color: #282C34;
`
const TitleDonut = styled.h2`
color:azure;
margin-top: 20px;
margin-bottom: 35px;
margin-left: 20px;
`
const TitleFirstSection = styled.p`
color:#ababab;
`
const CurrentValue = styled.p`
font-size: 25px;
`
const LastYearValue = styled.p`
font-size: 10px;
 color:#ababab;
`
const PictureWrapper = styled.div`
img{
  width: 100%;
  height: 100%;
  
}

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
        <SectionTwoItem>
          <div>
            <TitleFirstSection>Sales</TitleFirstSection>
            <CurrentValue>$152,996.00</CurrentValue>
            <LastYearValue>vs.$121,420.00  last year</LastYearValue>
          </div>
          <PictureWrapper><img src={arrowUp} alt="https://pl.freepik.com/wektory/strzalka"/></PictureWrapper>
        </SectionTwoItem>
        <SectionTwoItem>
          <div>
            <TitleFirstSection>Cost</TitleFirstSection>
            <CurrentValue>$99,700.00</CurrentValue>
            <LastYearValue>vs.$68,300.00  last year</LastYearValue>
          </div>
          <PictureWrapper><img src={arrowUp} alt="https://pl.freepik.com/wektory/strzalka"/></PictureWrapper>
        </SectionTwoItem>
        <SectionTwoItem>
          <div>
            <TitleFirstSection>Profit</TitleFirstSection>
            <CurrentValue>$99,700.00</CurrentValue>
            <LastYearValue>vs.$68,300.00  last year</LastYearValue>
          </div>
          <PictureWrapper><img src={arrowUp} alt="https://pl.freepik.com/wektory/strzalka"/></PictureWrapper>
        </SectionTwoItem>
        <SectionTwoItem>
          <div>
            <TitleFirstSection>Summary</TitleFirstSection>
            <CurrentValue >$99,700.00</CurrentValue>
            <LastYearValue>vs.$68,300.00  last year</LastYearValue>
          </div>
          <PictureWrapper><img src={arrowUp} alt="https://pl.freepik.com/wektory/strzalka"/></PictureWrapper>
        </SectionTwoItem>
      </SectionTwo>
      <SectionThree>
        <SectionThreeLeft>
          <CategoryChart/>
        </SectionThreeLeft>
        <SectionThreeRight>
          <TitleDonut>
            Cost Breakdown
          </TitleDonut>
          <BreakDownChart/>
        </SectionThreeRight>
      </SectionThree>
    </Container>
  </>
   );
}

export default AdminPage;