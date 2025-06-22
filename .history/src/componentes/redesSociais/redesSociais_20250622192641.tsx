import styled from 'styled-components';

type Props = {
  imagens: string[];
};

const RedesSociaisDiv = styled.div`
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
`;

function RedesSociais({ imagens }: Props) {
  return (
    <RedesSociaisDiv>
      {imagens.map((src, index) => (
        <img key={index} src={src} alt={`Ícone ${index + 1}`} />
      ))}
    </RedesSociaisDiv>
  );
}

export default RedesSociais;
