import styled, { keyframes } from 'styled-components';

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 32ch; // Aqui define o tamanho real
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
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

  return <Title>Minha Jornada como Desenvolvedor <br></br></Title>;
}

export default EmDesenvolvimento;
