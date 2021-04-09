import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.footer`
display:flex;
flex-direction:column;
padding-top: 30px;
border-top: 1px solid red;
width: calc(100% - 200px);
margin-left: 200px;
background-color:#0f1214;
color:azure;
text-align:center;
h1{
  margin-bottom: 50px;
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
  
  const handelClick = (e) => {
    e.preventDefault()
  }
  return (
    <FooterContainer>
      <h1>STOPKA</h1>
       <FirstSection>
        <div style={{paddingLeft: 30}}>
          <h4>POMOC</h4>
            <ul>
              <li>Bezpieczne płatnośłci</li>
              <li>FAQ</li>
              <li>Koszty dostawy</li>
              <li>Reklamacje</li>
              <li></li>
            </ul>
        </div>
        <div>
        <h4>OBSŁUGA SKLEPU GIWERA.PL</h4>
            <ul>
              <li>48 528 93 65</li>
              <li>48 752 52 55</li>
              <li>giwera@sklep.com</li>
            </ul>
        </div>
        <div>
        <h4>O NAS</h4>
            <ul>
              <li>Kontakt</li>
              <li>Zasady współpracy</li>
              <li>Znajdz salon</li>
              <li>Kariera w Giwera</li>
            </ul>
        </div>
        <div>
        <h4>NEWSLETTER</h4>
          <form action="">
            <input type="text" placeholder='Twój e-mail'/>
            <button onClick={handelClick}>ZAPISZ</button>
            <p>Zapisując się na nasz newsletter akceptujesz</p>
            <p>Regulamin i Politykę Prywatności</p>
          </form>
        </div>
       </FirstSection>
       <SecondSection>
         <div style={{paddingLeft: 30}}>
           <h4>MOJE KONTO</h4>
           <ul>
             <li>Zaloguj się</li>
             <li>Rejestracja</li>
           </ul>
         </div>
         <div>
         <h4>WYGODNE ZAKUP ONLINE</h4>
           <ul>
             <li>60 dni na zwrot</li>
             <li>Darmowa wysyłka od 149 zł</li>
             <li>Dostawa w 72h</li>
           </ul>
         </div>
         <div>
         <h4>INFORMACJE</h4>
           <ul>
             <li>Regulaminy</li>
             <li>Polityka prywatności</li>
           </ul>
         </div>
         <div>
           <h4>ZAINSPIRUJ SIĘ NA</h4>
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