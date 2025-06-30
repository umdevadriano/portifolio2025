import styled from 'styled-components';

type RedeSocial = {
  src: string;
  link: string;
};

type Props = {
  redes: RedeSocial[];
};

const RedesSociaisDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    transition: transform 0.2s;
  }

  a:hover img {
    transform: scale(1.1);
  }
`;

function RedesSociais({ redes }: Props) {
  return (
    <RedesSociaisDiv>
      {redes.map((rede, index) => (
        <a
          key={index}
          href={rede.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rede.src} alt={`Ícone ${index + 1}`} />
        </a>
      ))}
    </RedesSociaisDiv>
  );
}

export default RedesSociais;
