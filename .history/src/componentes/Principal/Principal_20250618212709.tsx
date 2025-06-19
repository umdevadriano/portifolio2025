import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Principal({ children }: Props): JSX.Element {
 
    const Principal_div = styled.div`
        flex: 1;
        padding: 32px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;
    return (
        <>
        <Principal_div>  {children}</Principal_div>
        </>
    )
}

export default Principal
