
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const createTypewriter = (length: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${length}ch;
  }
`;

const Title = styled.h1<{ length: number }>`
  font-size: 1rem;
  margin-bottom: 1rem;
  border-right: 2px solid #333;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => props.length}ch;
  animation: ${(props) => createTypewriter(props.length)} 4s steps(${(props) => props.length}) 1 forwards,
             ${blink} 0.75s step-end infinite;
  font-family: 'Courier New', Courier, monospace;
`;

const texto = `Desde o início da minha trajetória como desenvolvedor, sempre fui movido pela curiosidade e pelo desejo de transformar ideias em soluções reais. Meu GitHub reflete essa caminhada: uma coleção de projetos que resolvem problemas práticos, otimizam processos e demonstram meu comprometimento com a evolução contínua.`;

function EmDesenvolvimento() {
  return <Title length={texto.length}>{texto}</Title>;
}

export default EmDesenvolvimento;
