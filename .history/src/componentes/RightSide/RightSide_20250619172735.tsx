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
        padding: 1rem;
        background-color: #151302;
    `;

    return (
        <>
        <RightSideDiv>{children}</RightSideDiv>
        </>
    )
}

export default RightSide
