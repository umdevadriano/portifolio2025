import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
};

function redesSociais({ children }: Props){
    const RedesSociaisDiv = styled.div`
        flex: 1;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    return (
        <>
        <RedesSociaisDiv>{children}</RedesSociaisDiv>
        </>
    )
}

export default redesSociais
