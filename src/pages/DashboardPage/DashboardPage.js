import React,{useState, useLayoutEffect} from 'react';

import styled from 'styled-components';
import Header from '../../components/Header';
import  SideBar from '../../components/SideBar';
import  ProductsCard from '../../components/ProductsCard';
import  RecommendedProducts from '../../components/RecommendedProducts';
import  Footer from '../../components/Footer';
import {device} from '../../components/MediaQuery/MediaQuery';
import {AppContext, defaultObject} from '../../AppContext';

const Main = styled.main`
display:flex;
flex-direction:column;
background:#0f1214;
margin-left:200px;
margin-top: 90px;
min-height: calc(92vh - 90px);
@media ${device.tablet}{
  margin-left:0;
}

`
const SectionSideBar = styled.section`
width: 15vw;
`
const DashboardPage = () => {

  // const desktopViewport = window.matchMedia('screen and (min-width: 1280px)')

  const[sidebarVisible, setSidebarVisible]= useState(defaultObject.sidebarVisible);
  // 1280

  // function useWindowSize() {
  //   const [size, setSize] = useState(0);
  //   useLayoutEffect(() => {
  //     function updateSize() {
  //       setSize(window.innerWidth);
  //     }
  //     window.addEventListener('resize', updateSize);
  //     updateSize();
  //     return () => window.removeEventListener('resize', updateSize);
  //   }, []);
  //   return size;
  // }
  // const windowSize = useWindowSize()
  // // console.log(windowSize)
  // windowSize ===1280 &&setSidebarVisible(true)

  // function ShowWindowDimensions(){
  //   const [width] = useWindowSize()
  //   console.log(width)
  //   width === 1280 &&setSidebarVisible(true)
  // }
  // ShowWindowDimensions()


//  desktopViewport.addEventListener('resize',isDesktop => {
//   setSidebarVisible(isDesktop)
//  }

  const handelToggleStateSidebar  = () => setSidebarVisible(prevValue => !prevValue);
  return (
    <>
      <AppContext.Provider value={{ sidebarVisible, handelToggleStateSidebar }}>
        <nav>
        <Header/>
        </nav>
          <SectionSideBar>
              <SideBar/>
          </SectionSideBar>
      </AppContext.Provider>
        <Main>
          <section>
            <ProductsCard/>
          </section>
        </Main>
        <section>
          <RecommendedProducts/>
        </section>
        <footer><Footer/></footer>
    </>
   );
}

export default DashboardPage;