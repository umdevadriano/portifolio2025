import styled from 'styled-components';
type Props = {
  children: React.ReactNode;
};
function Date({ children }: Props){
    const DateP = styled.p`
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 12px;
    `;
    return (
        <>
        <DateP>{children}</DateP>
        </>
    )
}
export default Date
