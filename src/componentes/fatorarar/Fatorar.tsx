// TeamUpdateCard.tsx
import React from 'react';
import styled from 'styled-components';
import foto from '../assets/perfil.png'
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 400px;
  background-color: #f7f2f6;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightSide = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Divider = styled.div`
  width: 2px;
  background-color: black;
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

const Date = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #555;
`;

const Footer = styled.p`
  font-size: 12px;
  color: #999;
  margin-top: auto;
`;

const Fatorar: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Title>Team Update</Title>
        <Banner>Welcome to Nectir, Mateus!</Banner>
        <Profile src={foto} alt="Profile" />
        <Role>Senior Full-Stack Engineer</Role>
        <Footer>nectir<br />ALL-HANDS MEETING | MAY 2025</Footer>
      </LeftSide>

      <Divider />

      <RightSide>
        <Date>May 12<sup>th</sup>, 2025</Date>
        <Description>
          Mateus joins the team as the<br />
          fourth Senior Full-Stack Engineer
        </Description>
      </RightSide>
    </Container>
  );
};

export default Fatorar;
