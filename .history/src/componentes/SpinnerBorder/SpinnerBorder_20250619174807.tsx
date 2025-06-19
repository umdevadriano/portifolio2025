import styled, { keyframes } from 'styled-components';

function SpinnerBorder(){
    const rotate = keyframes`
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    `;
 
    // Wrapper da imagem com efeito de borda girando
    const SpinnerBorderDiv = styled.div`
        position: absolute;
        width: 230px;
        height: 230px;
        border-radius: 50%;
        animation: ${rotate} 3s linear infinite;
        pointer-events: none;

        background: conic-gradient(
        #eb4f44 0deg 60deg,
        transparent 60deg 360deg
        );

        mask: radial-gradient(transparent 108px, #000 115px);
        -webkit-mask: radial-gradient(transparent 108px, #000 115px);

        box-shadow: 0 0 6px rgba(235, 79, 68, 0.5);
        @media (max-width: 768px) {
            width: 23S0px;
            height: 21px;
        }

        @media (max-width: 480px) {
            width: 210px;
            height: 210px;
        }
    `;
    return (
        <>
        <SpinnerBorderDiv></SpinnerBorderDiv>
        </>
    )
}

export default SpinnerBorder
