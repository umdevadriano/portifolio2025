import React from "react";
import styled, { keyframes } from "styled-components";

interface LuzProps {
  className?: string;
}

const glowAnimation = keyframes`
  0%, 100% {
    filter: url(#glow);
    opacity: 0.5;
  }
  50% {
    filter: url(#glow);
    opacity: 1;
  }
`;

const SvgLamp = styled.svg`
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  animation: ${glowAnimation} 4s ease-in-out infinite;
  background-color: #f7f2f6;

  .st0 {
   fill:#ffff00;
     stroke-width: 10;
  }
  .st1 {
     stroke: #ffff00;
    stroke-width: 10;
    fill: none;
    transition: stroke 0.3s ease;
  }
`;

const LampadaAnimada: React.FC<LuzProps> = ({ className }) => {
  return (
    <SvgLamp
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1920"
      className={className}
    >
      <defs>
        <filter id="glow" height="200%" width="200%" x="-50%" y="-50%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="20"
            floodColor="#f7f2f6"
            floodOpacity="0.7"
          />
        </filter>
      </defs>

      <path
        className="st0"
        d="M1407.3 664.2c0 73.7-17.8 143.3-49.4 204.6-31.6 61.3-76.9 114.4-131.9 155.1 0 0-78 193.7-78 344.1H772.1c0-75.2-19.5-161.2-39-228.4-19.5-67.2-39-115.6-39-115.6-110-81.5-181.4-212.3-181.4-359.7C512.7 417.3 713 217 960 217s447.3 200.2 447.3 447.2z"
      />
      <path
        className="st0"
        d="M1057.3 1615.8v23.7c0 35-28.6 63.6-63.6 63.6h-67.5c-35 0-63.6-28.6-63.6-63.6v-23.7h194.7zm-285.2-82.6v82.6h375.4v-82.6H772.1zm0-82.6v82.6h375.3v-82.6H772.1zM960 1368H772.1v82.6h375.3V1368H960z"
      />
      <g>
        <g>
          <path
            className="st1"
            d="M1147.5 1368h.4c0-150.3 78-344.1 78-344.1 55-40.7 100.4-93.8 131.9-155.1 31.6-61.3 49.4-130.9 49.4-204.6 0-247-200.3-447.3-447.3-447.3S512.7 417.2 512.7 664.2c0 147.4 71.3 278.2 181.4 359.7 0 0 19.5 48.4 39 115.6 19.5 67.2 39 153.2 39 228.4h375.4z"
          />
          <path className="st1" d="M772.1 1368v247.8h375.4V1368" />
          <path className="st1" d="M772.1 1450.6h375.4" />
          <path className="st1" d="M772.1 1533.2h375.4" />
          <path
            className="st1"
            d="M862.7 1615.8v23.7c0 35 28.6 63.6 63.6 63.6h67.5c35 0 63.6-28.6 63.6-63.6v-23.7"
          />
          <path className="st1" d="M267.3 722.8h96" />
          <path className="st1" d="M498.3 1052.8l-160.5 160.5" />
          <path className="st1" d="M448.8 341.8L315.3 208.2" />
          <path className="st1" d="M1652.7 722.8h-96" />
          <path className="st1" d="M1421.7 1052.8l160.5 160.5" />
          <path className="st1" d="M1471.2 341.8l133.5-133.6" />
        </g>
      </g>
    </SvgLamp>
  );
};

export default LampadaAnimada;
