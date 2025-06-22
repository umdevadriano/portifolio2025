import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Footer({ children }: Props){

    const FooterP = styled.p`
        font-size: 12px;
        color: #999;
        margin-top: auto;
    `;
    const FooterDiv = styled.div`
       display: flex;
       justify-content: right;
     align-items: end;
       background-color: black;
    `;
    return (
        <>
        <FooterDiv> 
            <FooterP>{children}</FooterP>
        </FooterDiv>
      
        </>
    )
}

export default Footer
