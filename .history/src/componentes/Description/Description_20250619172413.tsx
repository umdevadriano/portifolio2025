import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
};
function Description({ children }: Props){
const DescriptionP = styled.p`
  font-size: 16px;
  color: #555;
  position: relative;
  padding-bottom: 8px;
  padding-right: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    overflow: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 9%;
    height: 2px;
       background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    );
    animation: shine 5.5s linear infinite alternate;
    border-radius: 1px;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(200%);   
    }
  }
`;
    return (
        <>
        <DescriptionP>{children}</DescriptionP>
        </>
    )
}
export default Description
