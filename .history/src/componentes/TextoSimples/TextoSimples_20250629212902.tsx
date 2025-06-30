import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const Titulo = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  color: #222;
  line-height: 1.6;
  word-break: break-word;
  white-space: normal;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

const texto = `Desde o início como desenvolvedor, sou movido pela curiosidade e vontade de transformar ideias em soluções reais. Meu GitHub reflete essa jornada com projetos práticos e focados em evolução contínua.`;

export default function TextoSimples() {
  return (
    <Container>
      <Titulo>{texto}</Titulo>
    </Container>
  );
}
