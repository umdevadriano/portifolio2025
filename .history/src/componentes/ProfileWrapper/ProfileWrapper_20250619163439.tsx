import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function ProfileWrapper({ children }: Props){
 
  // Wrapper da imagem com efeito de borda girando
  const ProfileWrapperDiv = styled.div`
    position: relative;
    width: 230px;
    height: 230px;
    display: flex;
    align-items: center;
    margin-top:1rem;
    justify-content: center;
  `;
  
    return (
        <>
        <ProfileWrapperDiv>{children}</ProfileWrapperDiv>
        </>
    )
}

export default ProfileWrapper
