import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Profile({ children }: Props){
 
    const ProfileImg = styled.img`
        width: 220px;
        height: 220px;
        border-radius: 50%;
        object-fit: cover;
        background-color: white;
        z-index: 1;
        filter: grayscale(60%) contrast(110%);
    `;
    
    return (
        <>
        <ProfileImg>{children}</ProfileImg>
        </>
    )
}

export default Profile
