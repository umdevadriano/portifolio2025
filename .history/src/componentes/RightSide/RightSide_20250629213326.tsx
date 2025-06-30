import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
};

function RightSide({ children }: Props){
    const RightSideDiv = styled.div`
        /* flex: 1; */
        /* padding: 2rem; */
        display: flex;
        width: 100%;
        height: 100%;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
    `;

    return (
        <>
        <RightSideDiv>{children}</RightSideDiv>
        </>
    )
}

export default RightSide
