import  { useEffect, useState } from 'react';
import styled from 'styled-components';

const texto = `Desde o início como desenvolvedor,
 sou movido pela curiosidade e vontade de transformar ideias em soluções reais. 
Meu GitHub reflete essa jornada com projetos práticos e focados em evolução contínua.
`;

const linhas = texto.split('\n').map(l => l.trim());

const Container = styled.div`
  /* background: #f4f4f4; */
  /* padding: 24px; */
    /* max-width: 90%;
    height: 100%; */
  margin: 40px auto;
  border-radius: 12px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: #222;
  line-height: 1.8;
`;

const Linha = styled.p`
  margin: 0;
  padding: 1rem;
  background-color: black;margin-bottom 2rem;
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
  const [linhasDigitadas, setLinhasDigitadas] = useState<string[]>([]);
  const [linhaAtual, setLinhaAtual] = useState(0);
  const [palavrasDigitadas, setPalavrasDigitadas] = useState<string[]>([]);

  useEffect(() => {
    if (linhaAtual >= linhas.length) return;

    const palavras = linhas[linhaAtual].split(' ');
    let index = 0;

    const intervalo = setInterval(() => {
      setPalavrasDigitadas((prev) => [...prev, palavras[index]]);
      index++;

      if (index >= palavras.length) {
        clearInterval(intervalo);
        setTimeout(() => {
          setLinhasDigitadas((prev) => [...prev, palavras.join(' ')]);
          setPalavrasDigitadas([]);
          setLinhaAtual((prev) => prev + 1);
        }, 600); // pausa entre as linhas
      }
    }, 180); // tempo entre cada palavra

    return () => clearInterval(intervalo);
  }, [linhaAtual]);

  return (
    <Container>
      {linhasDigitadas.map((linha, i) => (
        <Linha key={i}>{linha}</Linha>
      ))}

      {linhaAtual < linhas.length && (
        <Linha>
          {palavrasDigitadas.join(' ')} <Cursor />
        </Linha>
      )}
    </Container>
  );
}
