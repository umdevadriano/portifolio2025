import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const texto = `Desde o início como desenvolvedor, sou movido pela curiosidade e vontade de transformar ideias em soluções reais. Meu GitHub reflete essa jornada com projetos práticos e focados em evolução contínua.`;

const Container = styled.div`
  padding: 16px;
  max-width: 90%;
  margin: 32px auto;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #222;
  line-height: 1.6;
  word-wrap: break-word;

  @media (max-width: 600px) {
    padding: 12px;
    font-size: 1rem;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  border-right: 2px solid #333;
  animation: blink 0.8s steps(1) infinite;

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

export default function EmDesenvolvimento() {
  const [palavrasExibidas, setPalavrasExibidas] = useState<string[]>([]);

  useEffect(() => {
    const palavras = texto.split(' ');
    let index = 0;

    const interval = setInterval(() => {
      setPalavrasExibidas((prev) => [...prev, palavras[index]]);
      index++;

      if (index >= palavras.length) clearInterval(interval);
    }, 180);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      {palavrasExibidas.join(' ')}
      {palavrasExibidas.length < texto.split(' ').length && <Cursor />}
    </Container>
  );
}
