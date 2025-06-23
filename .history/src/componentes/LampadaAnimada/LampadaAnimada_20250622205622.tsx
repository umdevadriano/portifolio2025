
import styled, { keyframes } from "styled-components";

// Animação que faz o brilho aumentar e diminuir suavemente
const glow = keyframes`
  0% {
    filter: brightness(0.6);
    box-shadow: 0 0 5px rgba(255, 223, 0, 0.3);
  }
  50% {
    filter: brightness(1.5);
    box-shadow: 0 0 20px rgba(255, 223, 0, 1), 0 0 40px rgba(255, 223, 0, 0.8);
  }
  100% {
    filter: brightness(0.6);
    box-shadow: 0 0 5px rgba(255, 223, 0, 0.3);
  }
`;

const Lampada = styled.div`
  width: 100px;
  height: 140px;
  background: #f5e98a;
  border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
  position: relative;
  margin: 20px auto;
  animation: ${glow} 4s ease-in-out infinite;
  box-shadow: 0 0 5px rgba(255, 223, 0, 0.3);

  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 35%;
    width: 30px;
    height: 20px;
    background: #999;
    border-radius: 5px;
  }
`;

export default function LampadaAnimada() {
  return <Lampada />;
}
