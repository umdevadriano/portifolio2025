import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const texto = `Desde o início da minha trajetória como desenvolvedor, sempre fui movido pela curiosidade e pelo desejo de transformar ideias em soluções reais.
Meu GitHub reflete essa caminhada: uma coleção de projetos que resolvem problemas práticos, otimizam processos e demonstram meu comprometimento com a evolução contínua.`;

// Divide o texto em linhas
const linhas = texto.split('\n');

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const typewriter = (length: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${length}ch;
  }
`;

const Linha = styled.p<{ delay: number; length: number; isLast: boolean }>`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  width: ${(props) => props.length}ch;
  border-right: 2px solid #333;
  color: #222;
  margin: 0;
  animation:
    ${(props) => typewriter(props.length)} 2s steps(${(props) => props.length}, end) ${(props) => props.delay}s forwards,
    ${(props) =>
      props.isLast
        ? css`${blink} 0.75s step-end infinite`
        : 'none'};
`;

const Container = styled.div`
  background: #f7f7f7;
  padding: 24px;
  margin: 40px auto;
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

export default function EmDesenvolvimento() {
  return (
    <Container>
      {linhas.map((linha, index) => (
        <Linha
          key={index}
          length={linha.trim().length}
          delay={index * 2.2} // delay progressivo para cada linha
          isLast={index === linhas.length - 1}
        >
          {linha.trim()}
        </Linha>
      ))}
    </Container>
  );
}
