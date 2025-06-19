import styled from 'styled-components';

function Principal({ children }: Props) {
 
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
