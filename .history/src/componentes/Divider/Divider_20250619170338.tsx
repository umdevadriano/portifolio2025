import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

function Divider({ children }: Props){

    const DividerDiv = styled.div`
        width: 2px;
        height: 80%;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.1)
        );
        border-radius: 1px;
        position: relative;
        overflow: hidden;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                transparent 40%,
                rgba(255, 255, 255, 0.7) 50%,
                transparent 60%
            );
                animation: shine 3.8s linear infinite;
                pointer-events: none;
         }

        @keyframes shine {
            0% {
            transform: translateY(-100%);
            }
            100% {
            transform: translateY(100%);
            }
        }
    `;
    return (
        <>
        <DividerDiv>{children}</DividerDiv>
        </>
    )
}

export default Divider
