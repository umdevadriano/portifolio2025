import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props){
 
    const TitleH2 = styled.h2`
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #222;
  `; 
    return (
        <>
        <TitleH2>{children}</TitleH2>
        </>
    )
}

export default Title
