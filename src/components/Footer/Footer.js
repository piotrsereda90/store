import React from 'react';

import styled from 'styled-components';
import background from '../../assets/image/background_deer.jpg';
import { useTranslation } from 'react-i18next';
import{device} from '../MediaQuery/MediaQuery';

const FooterContainer = styled.footer`
display:flex;
flex-direction:column;
padding-top: 30px;
width: calc(100% - 200px);
margin-left: 200px;
background-image: url(${background});
background-size:cover;
background-position: 20% 10%;
background-attachment:fixed;
color:azure;
text-align:center;
justify-content:center;
min-height: 600px;
h1{
  margin-bottom: 50px;
}
@media ${device.tablet}{
  width: 100%;
  margin-left: 0;
}
`
const FirstSection = styled.div`
display:flex;
text-align:left;
justify-content:space-evenly;
div{
  width: 24%
}

form{
  margin-top: 20px;
  input{
    margin-bottom: 20px;
    padding: 5px 20px;
  }
  button{
    padding: 7px 20px;
    background-color: #2f3e93;
    outline:none;
    color:azure;
    border: none;
&:hover{
  background-color: #3f51b5;
  transition: .5s;
}
  }
}
ul{
  margin: 0;
  padding: 0;
  list-style:none;
  margin: 20px 0;
  li{
    text-decoration:none;
    padding:3px 0;
  
    a{
      list-style-type: none;
    }
  }
}
`
const SecondSection = styled.div`
display:flex;
justify-content: space-evenly;
text-align:left;
margin-top: 20px;
div{
  width: 24%
}
ul{
  margin: 0;
  padding: 0;
  list-style:none;
  margin: 20px 0;
  li{
    text-decoration:none;
    padding:3px 0;
  
    a{
      list-style-type: none;
    }
  }
}
`
const Footer = () => {

  const {t}= useTranslation();

  const handelClick = (e) => {
    e.preventDefault()
  }
  return (
    <FooterContainer>
       <FirstSection>
        <div style={{paddingLeft: 30}}>
        <h4>{t('description.part11')}</h4>
            <ul>
              <li>48 528 93 65</li>
              <li>48 752 52 55</li>
              <li>giwera@sklep.com</li>
            </ul>
        </div>
        <div>
        <h4>{t('description.part12')}</h4>
            <ul>
              <li>{t('description.part13')}</li>
              <li>FAQ</li>
              <li>{t('description.part14')}</li>
              <li>{t('description.part15')}</li>
              <li></li>
            </ul>
        </div>
        <div>
        <h4>{t('description.part16')}</h4>
            <ul>
              <li>{t('description.part17')}</li>
              <li>{t('description.part18')} </li>
              <li>{t('description.part19')}</li>
              <li>{t('description.part20')}</li>
            </ul>
        </div>
        <div>
        <h4>NEWSLETTER</h4>
          <form action="">
            <input type="text" placeholder={t('description.part21')}/>
            <button onClick={handelClick}>{t('description.part22')}</button>
            <p>{t('description.part23')}</p>
            <p>{t('description.part24')}</p>
          </form>
        </div>
       </FirstSection>
       <SecondSection>
         <div style={{paddingLeft: 30}}>
           <h4>{t('description.part25')}</h4>
           <ul>
             <li>{t('description.part26')}</li>
             <li>{t('description.part27')}</li>
           </ul>
         </div>
         <div>
         <h4>{t('description.part28')}</h4>
           <ul>
             <li>{t('description.part29')}</li>
             <li>{t('description.part30')}</li>
             <li>{t('description.part31')}</li>
           </ul>
         </div>
         <div>
         <h4>{t('description.part32')}</h4>
           <ul>
             <li>{t('description.part33')}</li>
             <li>{t('description.part34')}</li>
           </ul>
         </div>
         <div>
           <h4>{t('description.part35')}</h4>
           <div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
             <div></div>
           </div>
         </div>
       </SecondSection>
    </FooterContainer>
   );
}
 
export default Footer;