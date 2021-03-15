import React from 'react'

import styled from 'styled-components'
import Header from '../../components/Header'
import  SideBar from '../../components/SideBar'
import  Product from '../../components/Product'
import  RecommendedProduct from '../../components/RecommendedProduct'
import  Footer from '../../components/Footer'

const Main = styled.main`
display:flex;
// flex-wrap:wrap;
`
const SectionSideBar = styled.section`
width: 200px;
border: 3px solid #202528;
border-top:none;
`
const SectionProducts = styled.section`
width: 100%;
border: 3px solid #202528;
border-top:none;
`



const DashboardPage = () => {
  return (
    <>
      <nav>
       <Header/>
      </nav>
      <Main>
        <SectionSideBar>
          <SideBar/>
        </SectionSideBar>
        <SectionProducts>
          <Product/>
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