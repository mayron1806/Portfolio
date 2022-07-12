import styled, { keyframes, css } from "styled-components";
import {IoIosArrowDown} from "react-icons/io";
export const Container = styled.div`
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 0 2rem;
    align-items: baseline;
    gap: 2rem;
    position: relative;
    background-color: ${props => props.theme.primary};
    .wave{
        z-index: 10;
        position: absolute;
        bottom: 0;
        left: 0;
        path{
            fill: ${props => props.theme.main};
        }
    }
    .text{
        z-index: 5;
        height: 100%;
        max-width: 100%;
        overflow: hidden;
        padding-top: 15%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 2rem;
        position: relative;
    }
    video{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
    }
    ::after{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(90deg, rgba(0,26,27,1) 0%, rgba(0,26,27,0) 100%);
        z-index: 1;
    }
    @media (max-width: 700px){
        ::after{
            background: linear-gradient(0deg, rgba(0,26,27,1) 0%, rgba(0,26,27,0) 100%);
        }
        
    }
`;
export const Link = styled.a`
    color: ${props => props.theme.main};
    font-size: 2rem;
    background-color: transparent;
    border: 2px solid ${props => props.theme.main};
    border-radius: 10px;
    padding: .4rem 1.5rem;
    transition: 0.4s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    ::before{
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: 0;
        left: -10%;
        background-color: ${props => props.theme.main};
        transform: translate(-100%);
        z-index: -1;
        transition: 0.7s ease;
    }
    :hover{
        ::before{
            transform: translate(0%);
        }
        color: ${props => props.theme.primary};
        border: 2px solid ${props => props.theme.main};
    }
`;
const anim = keyframes`
    0%{
        transform: translateY(0); 
    }
    50%{
        transform: translateY(-10px); 
    }
    100%{
        transform: translateY(0);
    }
`;
const scrollDownAnim = (delay: number = 0) => {
    return css`animation: ${anim} 1s ${delay}s  ease infinite `;
}
export const ScroolDown = styled.div`
    position: absolute;
    bottom: 0;
    color: ${props => props.theme.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    &{ 
        ${scrollDownAnim()}
    }
    &.left{ left: 1%; }
    &.right{ right: 1%; }
    p{
        font-size: 2rem;
        writing-mode: vertical-rl;  
        filter: drop-shadow(0 0 10px var(--shadow-color));
        ${scrollDownAnim(0.2)}
    }
`;
export const Arrow = styled(IoIosArrowDown)`
    width: 30px;
    height: 30px;
`;