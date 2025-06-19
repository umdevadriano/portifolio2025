import styled, { keyframes } from 'styled-components';

function SpinnerBorder(){
 
    // Wrapper da imagem com efeito de borda girando
    const SpinnerBorderDiv = styled.div`
        position: relative;
        width: 230px;
        height: 230px;
        display: flex;
        align-items: center;
        margin-top:1rem;
        justify-content: center;
    `;

  
    return (
        <>
        <SpinnerBorderDiv></SpinnerBorderDiv>
        </>
    )
}

export default SpinnerBorder
