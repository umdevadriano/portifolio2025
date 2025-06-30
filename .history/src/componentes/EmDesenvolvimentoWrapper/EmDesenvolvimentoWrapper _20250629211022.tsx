import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const texto = `Desde o início como desenvolvedor, sou movido pela curiosidade e vontade de 
transformar ideias em soluções reais. Meu GitHub reflete essa jornada com projetos práticos e focados em evolução contínua.`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  border-right: 2px solid #333;
  animation: ${blink} 1s steps(1) infinite;
`;

export default function EmDesenvolvimento() {
  const [textoDigitado, setTextoDigitado] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTextoDigitado((prev) => prev + texto[i]);
      i++;
      if (i >= texto.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {textoDigitado}
      {textoDigitado.length < texto.length && <Cursor />}
    </Container>
  );
}
