import styled, { createGlobalStyle } from 'styled-components';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
import RedesSociais from '../redesSociais/redesSociais';
import github from '../redesSociais/github.png';
import linkedin from '../redesSociais/linkedin.png';

const data = new Date();
const ano = data.getFullYear(); 
function ContainerPrincipal() {
  
  const redes = [
    { src: github, link: 'https://github.com/adrianodisam' },
    { src: github, link: 'https://github.com/umdevadriano' },
    { src: linkedin, link: 'https://www.linkedin.com/in/adriano-silva-sampaio/' }
  ];
  const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    background-color: #f7f2f6;
    margin: 1rem;
  }

    html, body {
      margin: 0;
      padding: 0;
      overflow-x: hidden;
      width: 100%;
    }
  `;

  const Principal = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      align-items: center;
    }


  `;
  return (
    <>
      <GlobalStyle />
      <Principal> 
        <Body/>
      </Principal>
      <RedesSociais redes={redes}/>
      <Footer>Desenvolvimento de Software<br />© {ano} Adriano Silva Sampaio</Footer>
    </>
  )
}
export default ContainerPrincipal
