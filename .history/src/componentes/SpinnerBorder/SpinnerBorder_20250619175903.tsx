import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerBorderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  animation: ${rotate} 3s linear infinite;
  border-radius: 50%;
  background: conic-gradient(
    #eb4f44 0deg 60deg,
    transparent 60deg 360deg
  );
  mask: radial-gradient(transparent 48%, #000 52%);
  -webkit-mask: radial-gradient(transparent 48%, #000 52%);
  box-shadow: 0 0 6px rgba(235, 79, 68, 0.5);
    width: 230px;
    height: 230px;

  @media (max-width: 768px) {
    width: 230px;
    height: 230px;

  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

function SpinnerBorder() {
  return <SpinnerBorderDiv />;
}

export default SpinnerBorder;
