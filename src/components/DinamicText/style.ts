import styled, { keyframes } from "styled-components";

export const Text = styled.h1`
    color: ${props => props.theme.secondary};
    font-family: 'Roboto Slab', serif;
    font-size: 5rem;
    line-height: 5.8rem;
    @media (max-width: 750px){
        font-size: 4rem;
        line-height: 4.8rem;
    }
    @media (max-width: 450px){
        font-size: 3.5rem;
        line-height: 4.3rem;
    }
`;
const textAnim = keyframes`
    0%{
        transform: translateY(100%);
    }
    20%, 35%{
        transform: translate(0);
    }
    55%, 70%{
        transform: translateY(-100%);
    }
    85%, 100%{
        transform: translateY(-200%);
    }
`;
export const Dinamic = styled.ul`
    height: 6rem;
    line-height: 6rem;
    overflow: hidden;
    li{
        animation: ${textAnim} 10s ease 1 forwards;
    }
`;