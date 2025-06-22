import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Banner({ children }: Props){
 
    const BannerDiv = styled.div`
        background-color: #eb4f44;
        color: white;
        padding: 0.5rem;
        font-weight: bold;
        font-size: 16px;
        display: inline-block;
        border-radius: 4px;
        width: 22rem;
    `;
    return (
        <>
        <BannerDiv>{children}</BannerDiv>
        </>
    )
}

export default Banner
