import React from "react";
import styled, { keyframes } from "styled-components";

const glow = keyframes`
  0%, 100% {
    opacity: 0.5;
    filter: brightness(0.6);
  }
  50% {
    opacity: 1;
    filter: brightness(1.2);
  }
`;

const LampContainer = styled.div`
  width: 120px;
  height: 160px;
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
        <path
          d="M32 10c-13 0-22 16-22 30 0 13 9 30 22 30s22-17 22-30c0-14-9-30-22-30z"
          fill="#FFEB3B"
        />
        <rect x="26" y="70" width="12" height="14" rx="3" fill="#555" />
        <rect x="22" y="84" width="20" height="6" rx="2" fill="#444" />
      </svg>
    </LampContainer>
  );
}
