import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Title({ children }: Props){
 
    const TitleH2 = styled.h2`
        font-size: 1.3rem;
        margin-bottom: 1rem;
        color: #222;

        @media (max-width: 768px) {
          margin-top: 5rem;
        }
  `; 
    return (
        <>
        <TitleH2>{children}</TitleH2>
        </>
    )
}

export default Title
