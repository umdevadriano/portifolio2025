import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 18ch;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const EmDesenvolvimentoWrapper = styled.div`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5rem;
  color:  #333;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid  #333;
  width: fit-content;
  margin: 40px auto;

  animation: ${typewriter} 2s steps(18) 1s 1 normal both,
             ${blink} 0.7s step-end infinite;
`;

function EmDesenvolvimento() {
  return <EmDesenvolvimentoWrapper>Minha Jornada como <br>Desenvolvedor</EmDesenvolvimentoWrapper>;
}

export default EmDesenvolvimento;
