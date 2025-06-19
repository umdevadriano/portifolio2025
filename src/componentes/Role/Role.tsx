import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Role({ children }: Props){
    const RoleP = styled.p`
        font-size: 16px;
        font-weight: 500;
        color: #333;
    `;
    return (
        <>
        <RoleP>{children}</RoleP>
        </>
    )
}
export default Role
