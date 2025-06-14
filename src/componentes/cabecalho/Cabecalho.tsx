import styled from 'styled-components';
import foto from '../assets/perfil.png'
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

  const Profile = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 100%;
    margin: 24px 0;
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

  
  const Divider = styled.div`
    width: 2px;
    background-color: black;
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
  `;

  return (
    <>
      <Principal>
        <Title>Acompanhe aqui minhas atualizações.</Title>
        <Banner>Seja bem-vindo ao meu espaço profissional!</Banner>
        <Profile src={foto} alt="Profile" />
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