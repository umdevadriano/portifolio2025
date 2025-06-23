import React from 'react';
import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const createTypewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const Container = styled.div`
  max-width: 90%;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  line-height: 1.6;
  color: #222;
`;

const AnimatedText = styled.p`
  display: inline-block;
  border-right: 2px solid #333;
  white-space: pre-wrap; /* permite múltiplas linhas */
  overflow: hidden;
  animation: ${createTypewriter} 6s steps(100, end) forwards,
             ${blink} 0.75s step-end infinite;
`;

const texto = `Desde o início da minha trajetória como desenvolvedor, sempre fui movido pela curiosidade e pelo desejo de transformar ideias em soluções reais. 

Meu GitHub reflete essa caminhada: uma coleção de projetos que resolvem problemas práticos, otimizam processos e demonstram meu comprometimento com a evolução contínua.`;

export default function EmDesenvolvimento() {
  return (
    <Container>
      <AnimatedText>{texto}</AnimatedText>
    </Container>
  );
}
