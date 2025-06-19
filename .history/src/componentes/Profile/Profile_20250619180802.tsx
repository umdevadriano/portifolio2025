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
            width: 200px;
            height: 200px;
        }
        @media (max-width: 480px) {
            width: 200px;
            height: 200px;
        }
    `;
    return (
        <>
        <ProfileImg src={foto} alt="Foto de perfil"></ProfileImg>
        </>
    )
}

export default Profile
