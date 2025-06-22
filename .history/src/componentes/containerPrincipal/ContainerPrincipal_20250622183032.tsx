import styled, { createGlobalStyle } from 'styled-components';
import Body from '../Body/Body';
import Footer from '../Footer/Footer';
const data = new Date();
const ano = data.getFullYear(); 
function ContainerPrincipal() {
  const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
    background-color: #f7f2f6;
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

    /* @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      align-items: center;
    }

  @media (max-width: 480px) {
    width: 0px;
    height: 0px;
  } */
  `;
  return (
    <>
      <GlobalStyle />
      <Principal> 
        <Body/>
      </Principal>
      <Footer>Desenvolvimento de Software<br />© {ano} Adriano Silva Sampaio</Footer>
    </>
  )
}
export default ContainerPrincipal
