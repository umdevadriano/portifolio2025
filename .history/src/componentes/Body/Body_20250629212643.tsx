import Principal from '../Principal/Principal';
import Title from '../Title/Title';
import Banner from '../Banner/Banner';
import ProfileWrapper from '../ProfileWrapper/ProfileWrapper';
import Profile from '../Profile/Profile';
import Role from '../Role/Role';
import Divider from '../Divider/Divider';
import RightSide from '../RightSide/RightSide';
import DateComponente from '../DateComponente/DateComponente';
import EmDesenvolvimento from '../EmDesenvolvimentoWrapper/EmDesenvolvimentoWrapper ';
import LampadaAnimada from '../LampadaAnimada/LampadaAnimada';
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
          <Profile/>
        </ProfileWrapper>
        <Role> Adriano Silva Sampaio</Role>
        <Role> Desevolvedor  Full-Stack </Role>
      </Principal>
      <Divider />
      <RightSide>
        <DateComponente>{dia}  {mes} , {ano} </DateComponente>
        <LampadaAnimada/>
        {/* <Title>Acompanhe aqui minhas atualizações.</Title> */}

        {/* <EmDesenvolvimento/> */}
      </RightSide>
    </> 
  )
}
export default Cabecalho