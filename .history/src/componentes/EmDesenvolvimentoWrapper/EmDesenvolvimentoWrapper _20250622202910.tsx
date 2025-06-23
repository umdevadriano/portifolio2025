import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 50ch; // Aqui define o tamanho real
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

  animation: ${typewriter} 2s steps(50) 1s 1 normal both,
             ${blink} 0.7s step-end infinite;
`;



const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-right: 3px solid #333;
  white-space: nowrap;
  overflow: hidden;
  width: 18ch;
  animation: ${typewriter} 2.5s steps(51) 1 forwards,
             ${blink} 0.75s step-end infinite;
`;

function EmDesenvolvimento() {
  return <Title>Minha Jornada como Desenvolvedor</Title>;
}

export default EmDesenvolvimento;
