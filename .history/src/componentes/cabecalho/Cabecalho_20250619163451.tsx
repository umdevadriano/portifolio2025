import styled, { keyframes } from 'styled-components';
import foto from '../assets/foto2.png'
import Principal from '../Principal/Principal';
import Title from '../Title/Title';
import Banner from '../Banner/Banner';
import ProfileWrapper from '../ProfileWrapper/ProfileWrapper';
import SpinnerBorder from '../SpinnerBorder/SpinnerBorder';

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0'); 
const mes = data.toLocaleString('pt-BR', { month: 'long' }); 
const ano = data.getFullYear(); 

function Cabecalho() {

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
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(200%);   
    }
  }
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
        <SpinnerBorder/>
        <Profile src={foto} alt="Foto de perfil" />
        </ProfileWrapper>
  
        <Role> Desevolvedor Júnior III Full-Stack </Role>
        <Footer>Desenvolvedor<br />© 2025 Adriano Silva Sampaio</Footer>
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