import React from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ProductsCard from '../../components/ProductsCard';
import RecommendedProducts from '../../components/RecommendedProducts';
import Footer from '../../components/Footer';

const Main = styled.main`
display:flex;
flex-direction:column;
background:#0f1214;
margin-left:200px;
margin-top: 90px;
min-height: calc(92vh - 90px);
`
const SectionSideBar = styled.section`
width: 15vw;
`
const DashboardPage = () => {

  return (
    <>
      <nav>
        <Header/>
      </nav>
      <SectionSideBar>
        <SideBar/>
      </SectionSideBar>
      <Main>
        <section>
          <ProductsCard/>
        </section>
      </Main>
      <section>
        <RecommendedProducts/>
      </section>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default DashboardPage;