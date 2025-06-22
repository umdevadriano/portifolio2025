import styled, { createGlobalStyle } from 'styled-components';
import Cabecalho from '../Body/Body';
function ContainerPrincipal() {
  const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
    box-sizing: border-box;
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
    background-color: #f7f2f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }

  @media (max-width: 480px) {
    width: 0px;
    height: 0px;
  }
  `;
  return (
    <>
      <GlobalStyle />
      <Principal> 
        <Cabecalho/>
      </Principal>
    </>
  )
}
export default ContainerPrincipal
