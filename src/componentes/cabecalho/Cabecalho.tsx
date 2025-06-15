import styled, { keyframes } from 'styled-components';
import foto from '../assets/foto2.png'
const data = new Date();
const dia = String(data.getDate()).padStart(2, '0'); 
const mes = data.toLocaleString('pt-BR', { month: 'long' }); 
const ano = data.getFullYear(); 

function Cabecalho() {
 
  const Principal = styled.div`
    flex: 1;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 24px;
    color: #222;
  `; 

  const Banner = styled.div`
    background-color: #eb4f44;
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 16px;
    display: inline-block;
    border-radius: 4px;
  `;


  const Role = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #333;
  `;

  const Footer = styled.p`
    font-size: 12px;
    color: #999;
    margin-top: auto;
  `;

  
  // const Divider = styled.div`
  //   width: 2px;
  //   background-color: black;
  // `;
 const Divider = styled.div`
  width: 2px;
  height: 80%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1)
  );
  border-radius: 1px;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 40%,
      rgba(255, 255, 255, 0.7) 50%,
      transparent 60%
    );
    animation: shine 3.8s linear infinite;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;


  const RightSide = styled.div`
    flex: 1;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;


  const Date = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  `;

    // const Description = styled.p`
    //   font-size: 16px;
    //   color: #555;
    // `;
const Description = styled.p`
  font-size: 16px;
  color: #555;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    /* background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    ); */
    border-radius: 1px;
    overflow: hidden;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 9%;
    height: 2px;
    /* background: linear-gradient(
      to right,
      transparent 20%,
      rgba(255, 255, 255, 0.7) 50%,
      transparent 60%
    ); */
       background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.1)
    );
    animation: shine 5.5s linear infinite alternate;
    border-radius: 1px;
    pointer-events: none;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;



const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Wrapper da imagem com efeito de borda girando
const ProfileWrapper = styled.div`
  position: relative;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  margin-top:1rem;
  justify-content: center;
`;


const SpinnerBorder = styled.div`
  position: absolute;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  animation: ${rotate} 3s linear infinite;
  pointer-events: none;

  background: conic-gradient(
    #eb4f44 0deg 60deg,
    transparent 60deg 360deg
  );

  mask: radial-gradient(transparent 108px, #000 115px);
  -webkit-mask: radial-gradient(transparent 108px, #000 115px);

  box-shadow: 0 0 6px rgba(235, 79, 68, 0.5);
`;



const Profile = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  background-color: white;
  z-index: 1;

  filter: grayscale(60%) contrast(110%);
`;

  return (
    <>
      <Principal>
        <Title>Acompanhe aqui minhas atualizações.</Title>
        <Banner>Seja bem-vindo ao meu espaço profissional!</Banner>
        <ProfileWrapper>
          <SpinnerBorder />
          <Profile src={foto} alt="Foto de perfil" />
        </ProfileWrapper>
      
        <Role> Desevolvedor Júnior III Full-Stack </Role>
        <Footer>Desenvolvedor<br />© 2025 Adriano, Inc.</Footer>
      </Principal>  
      <Divider />
      <RightSide>
        <Date>{dia}  {mes} , {ano} </Date>
        <Description>
          Adriano Silva Sampaio<br />
          Desevolvedor  Full-Stack 
        </Description>
      </RightSide>
      
    </>

    
  )
}

export default Cabecalho