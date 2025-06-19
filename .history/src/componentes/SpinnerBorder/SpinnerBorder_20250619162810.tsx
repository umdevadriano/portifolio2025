import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function SpinnerBorder({ children }: Props){
 
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
        <SpinnerBorderDiv>{children}</SpinnerBorderDiv>
        </>
    )
}

export default SpinnerBorder
