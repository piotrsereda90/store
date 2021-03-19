import React from 'react'

import styled from 'styled-components'
import Header from '../../components/Header'
import  SideBar from '../../components/SideBar'
import  ProductsCard from '../../components/ProductsCard'
import  RecommendedProduct from '../../components/RecommendedProduct'
import  Footer from '../../components/Footer'

const Main = styled.main`
display:flex;
flex-direction:column;
background:#0f1214;
margin-left:200px;
margin-top: 90px;
min-height: 100vh;


`
const SectionSideBar = styled.section`
width: 15vw;
border-top:none;
`
const SectionProducts = styled.section`
// width: calc(80vw + 200px);
`
// const SectionBackground = styled.div`
// background-image:url(${background});
// width: 100%;
// height: 70vh;
// background-size: cover;
// background-position:0% 70%;
// background-attachment:fixed
// }
// `
const SectionTitle = styled.section`
color: azure;
font-size: 30px;
text-align:center;
padding: 20px
`
const DashboardPage = () => {
  return (
    <>
      <nav>
       <Header/>
      </nav>
      {/* <SectionBackground></SectionBackground> */}
        <SectionSideBar>
          <SideBar/>
        </SectionSideBar>
      <Main>
        <SectionTitle>PRODUKTY</SectionTitle>
        <SectionProducts>
          <ProductsCard/>
        </SectionProducts>
      </Main>
      <section>
        <RecommendedProduct/>
      </section>
      <footer><Footer/></footer>
    </>
   );
}

export default DashboardPage;