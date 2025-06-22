import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Footer({ children }: Props){

    const FooterP = styled.p`
        font-size: 12px;
        color: #999;
        margin-top: auto;
        display: flex;
    `;
    return (
        <>
        <FooterP>{children}</FooterP>
        </>
    )
}

export default Footer
