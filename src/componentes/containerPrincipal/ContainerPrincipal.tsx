import styled, { createGlobalStyle } from 'styled-components';
import Cabecalho from '../cabecalho/Cabecalho';
import Centro from '../centro/Centro';
import Final from '../final/Final';
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
    /* align-items: center; */
    /* flex-direction: column; */
    width: 100%;
    height: 100vh;
    background-color: #f7f2f6;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: 'Arial', sans-serif;
    overflow: hidden;
    margin: 0;
    padding: 0;
  `;
  // const Principal = styled.div`
  //   display: flex;
  //   width: 100%;
  //   max-width: 900px;
  //   height: 400px;
  //   background-color: #f7f2f6;
  //   font-family: 'Arial', sans-serif;
  //   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  // `;

  return (
    <>
      <GlobalStyle />
      <Principal> 
        <Cabecalho/>
        {/* <Centro/> */}
        {/* <Final/> */}
      </Principal>
    </>
  )
}

export default ContainerPrincipal
