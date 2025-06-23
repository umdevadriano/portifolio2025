import React from "react";
import styled, { keyframes } from "styled-components";

// Animação que aumenta o brilho da lâmpada
const glow = keyframes`
  0% {
    filter: brightness(0.4);
    opacity: 0.5;
    drop-shadow(0 0 2px rgba(255, 223, 0, 0.2));
  }
  50% {
    filter: brightness(1.2);
    opacity: 1;
    drop-shadow(0 0 8px rgba(255, 223, 0, 0.8));
  }
  100% {
    filter: brightness(0.4);
    opacity: 0.5;
    drop-shadow(0 0 2px rgba(255, 223, 0, 0.2));
  }
`;

// Container do SVG com animação
const LampContainer = styled.div`
  width: 120px;
  height: 180px;
  margin: 20px auto;
  animation: ${glow} 4s ease-in-out infinite;
`;

export default function LampadaAnimada() {
  return (
    <LampContainer>
      <svg
        viewBox="0 0 64 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        {/* Bulbo da lâmpada */}
        <ellipse
          cx="32"
          cy="40"
          rx="24"
          ry="30"
          fill="url(#yellowGlow)"
          stroke="#b38600"
          strokeWidth="2"
        />
        {/* Filamento */}
        <path
          d="M20 40 Q32 25 44 40"
          stroke="#b38600"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="40"
          x2="32"
          y2="55"
          stroke="#b38600"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Base da lâmpada */}
        <rect
          x="20"
          y="70"
          width="24"
          height="12"
          fill="#666"
          stroke="#444"
          strokeWidth="1.5"
          rx="4"
        />
        <rect
          x="26"
          y="82"
          width="12"
          height="6"
          fill="#444"
          rx="2"
        />
        <defs>
          <radialGradient id="yellowGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fff89a" />
            <stop offset="100%" stopColor="#ffeb3b" />
          </radialGradient>
        </defs>
      </svg>
    </LampContainer>
  );
}
