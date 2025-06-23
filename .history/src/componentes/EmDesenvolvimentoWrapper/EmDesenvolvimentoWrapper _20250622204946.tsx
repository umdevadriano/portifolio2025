import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const texto = `Desde o início da minha trajetória como desenvolvedor,
sempre fui movido pela curiosidade e pelo desejo de transformar ideias em soluções reais.
Meu GitHub reflete essa caminhada: uma coleção de projetos que resolvem problemas práticos,
otimizam processos e demonstram meu comprometimento com a evolução contínua.`;

const linhas = texto.split('\n').map(l => l.trim());

// 🔆 Animação da luz de fundo (efeito de lâmpada suave)
const pulseLight = keyframes`
  0% {
    background-position: 50% 50%;
    opacity: 0.9;
  }
  50% {
    background-position: 52% 48%;
    opacity: 1;
  }
  100% {
    background-position: 50% 50%;
    opacity: 0.9;
  }
`;

const Container = styled.div`
  background: radial-gradient(circle at center, rgba(255, 255, 150, 0.25), transparent 60%);
  background-repeat: no-repeat;
  background-size: 250% 250%;
  animation: ${pulseLight} 6s ease-in-out infinite;

  padding: 32px;
  max-width: 90%;
  margin: 60px auto;
  border-radius: 16px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color: #222;
  line-height: 1.8;
  box-shadow: 0 0 40px rgba(255, 255, 100, 0.2);
  position: relative;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Linha = styled.p`
  margin: 0;
  animation: ${fadeIn} 0.4s ease;
`;

const Palavra = styled.span`
  margin-right: 4px;
  animation: ${fadeIn} 0.3s ease;
  display: inline-block;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 1ch;
  border-right: 2px solid #333;
  animation: blink 0.8s step-end infinite;

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
        }, 1000);
      }
    }, 280);

    return () => clearInterval(intervalo);
  }, [linhaAtual]);

  return (
    <Container>
      {linhasDigitadas.map((linha, i) => (
        <Linha key={i}>{linha}</Linha>
      ))}

      {linhaAtual < linhas.length && (
        <Linha>
          {palavrasDigitadas.map((palavra, i) => (
            <Palavra key={i}>{palavra}</Palavra>
          ))}
          <Cursor />
        </Linha>
      )}
    </Container>
  );
}
