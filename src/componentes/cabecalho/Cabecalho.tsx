import styled from 'styled-components';
function Cabecalho() {

    const Principal = styled.div`
        display: flex;
        justify-content: center;
        width: 100%;
        height: 25%;
        background-color: #ed7979;
        overflow: hidden;
        margin: 0;
        padding: 0;
    `;

 
  return (
    <>
    <Principal>Cabeçalho</Principal>
    </>
  )
}

export default Cabecalho