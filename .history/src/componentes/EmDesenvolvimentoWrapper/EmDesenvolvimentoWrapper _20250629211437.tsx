import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 100%;
  /* max-width: 800px; */
  margin: 40px auto;
  padding: 0 16px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;

  animation: ${slideIn} 0.8s ease-out forwards;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const texto = `Desde o início como desenvolvedor,
 sou movido pela curiosidade e vontade de transformar
  ideias em soluções reais. Meu GitHub reflete essa jornada 
  com projetos práticos e focados em evolução contínua.`;

export default function EmDesenvolvimento() {
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrar(true);
    }, 200); // atraso leve se quiser

    return () => clearTimeout(timer);
  }, []);

  return mostrar ? <Container>{texto}</Container> : null;
}
