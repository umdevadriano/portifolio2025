import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
};

function RightSide({ children }: Props){
    const RightSideDiv = styled.div`
        flex: 1;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: black;
    `;

    return (
        <>
        <RightSideDiv>{children}</RightSideDiv>
        </>
    )
}

export default RightSide
