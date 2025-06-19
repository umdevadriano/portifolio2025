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
        border: solid 1px black;
        
        @media (max-width: 768px) {
            width: 140px;
            height: 140px;
        }
        @media (max-width: 480px) {
            width: 100px;
            height: 100px;
        }
    `;

    
    
    return (
        <>
        <ProfileImg src={foto} alt="Foto de perfil"></ProfileImg>
        </>
    )
}

export default Profile
