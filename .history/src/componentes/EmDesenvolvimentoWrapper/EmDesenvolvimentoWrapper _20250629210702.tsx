import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const texto = `Desde o início como desenvolvedor, sou movido pela curiosidade e vontade de transformar ideias em soluções reais. Meu GitHub reflete essa jornada com projetos práticos e focados em evolução contínua.`;

const Container = styled.div`
  max-width: 100%;
  margin: 40px auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;

  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0 12px;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  border-right: 2px solid #333;
  animation: blink 1s steps(1) infinite;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default function EmDesenvolvimento() {
  const [textoDigitado, setTextoDigitado] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalo = setInterval(() => {
      setTextoDigitado((prev) => prev + texto[i]);
      i++;
      if (i >= texto.length) clearInterval(intervalo);
    }, 30);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <Container>
      {textoDigitado}
      {textoDigitado.length < texto.length && <Cursor />}
    </Container>
  );
}
