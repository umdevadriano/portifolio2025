import Principal from '../Principal/Principal';
import Title from '../Title/Title';
import Banner from '../Banner/Banner';
import ProfileWrapper from '../ProfileWrapper/ProfileWrapper';
import SpinnerBorder from '../SpinnerBorder/SpinnerBorder';
import Profile from '../Profile/Profile';
import Role from '../Role/Role';
import Footer from '../Footer/Footer';
import Divider from '../Divider/Divider';
import RightSide from '../RightSide/RightSide';
import DateComponente from '../DateComponente/DateComponente';
import Description from '../Description/Description';
const data = new Date();
const dia = String(data.getDate()).padStart(2, '0'); 
const mes = data.toLocaleString('pt-BR', { month: 'long' }); 
const ano = data.getFullYear(); 

function Cabecalho() {
  return (
    <>
      <Principal>
        <Title>Acompanhe aqui minhas atualizações.</Title>
        <Banner>Seja bem-vindo ao meu espaço profissional!</Banner>
        <ProfileWrapper>
          <SpinnerBorder/>
          <Profile/>
        </ProfileWrapper>
        <Role> Desevolvedor Júnior III Full-Stack </Role>
      </Principal>
      <Divider />
      <RightSide>
        <DateComponente>{dia}  {mes} , {ano} </DateComponente>
        <Description>
          Adriano Silva Sampaio<br />
          Desevolvedor Júnior III Full-Stack
        </Description>
      </RightSide>
      <Footer>Desenvolvimento de Software<br />© {ano} Adriano Silva Sampaio</Footer>
    </> 
  )
}
export default Cabecalho