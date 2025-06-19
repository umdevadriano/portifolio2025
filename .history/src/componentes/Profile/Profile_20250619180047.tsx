import styled from 'styled-components';
import foto from '../assets/foto2.png'

function Profile(){
 
    const ProfileImg = styled.img`
        width: 220px;
        height: 220px;
        border-radius: 50%;
        object-fit: cover;
        background-color: white;
        z-index: 1;
        filter: grayscale(60%) contrast(110%);
        
        @media (max-width: 768px) {
            width: 140px;
            height: 140px;
        }
        @media (max-width: 480px) {
            width: 100px;
            height: 100px;
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

const SpinnerBorderDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  animation: ${rotate} 3s linear infinite;
  border-radius: 50%;
  background: conic-gradient(
    #eb4f44 0deg 60deg,
    transparent 60deg 360deg
  );
  mask: radial-gradient(transparent 48%, #000 52%);
  -webkit-mask: radial-gradient(transparent 48%, #000 52%);
  box-shadow: 0 0 6px rgba(235, 79, 68, 0.5);
    width: 230px;
    height: 230px;

  @media (max-width: 768px) {
    width: 230px;
    height: 230px;

  }

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

    
    return (
        <>
        <SpinnerBorderDiv>
            <ProfileImg src={foto} alt="Foto de perfil"></ProfileImg>
        </SpinnerBorderDiv>
        
        </>
    )
}

export default Profile
