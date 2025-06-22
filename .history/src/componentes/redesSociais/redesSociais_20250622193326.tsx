import styled from 'styled-components';

type Props = {
  imagens: string[];
};

const RedesSociaisDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  img {
    width: 2rem;
    height:2rem;
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
