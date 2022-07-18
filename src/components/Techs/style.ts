import styled, { css, keyframes } from "styled-components";

import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

export const Container = styled.div`
    padding: 0 2rem;
    position: relative;
`;
export const Content = styled.div`
    position: relative;
    height: 370px;
`;
export const TechsContent = styled.div`
    height: 100%;
    padding-top: 2rem;
    margin: 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    gap: 2rem;
    position: relative;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{ height: 0px; }
`;
const loadingAnim = keyframes`
    0%{
        content: "";
    }
    25%{
        content: ".";
    }
    50%{
        content: "..";
    }
    75%{
        content: "...";
    }
    100%{
        content: "....";
    }
`;
export const Loading = styled.h2`
    font-size: 5rem;
    color: ${props => props.theme.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    ::after{
        content: "";
        animation: ${loadingAnim} 1s linear infinite;
    }
`;
const icon = css`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.5s;
    :hover{
        filter: drop-shadow(0 0 4px ${props => props.theme.secondary});
    }
`;
export const DownButton = styled(IoIosArrowBack)`
    ${icon}
    left: 0;
`;
export const UpButton = styled(IoIosArrowForward)`
    ${icon}
    right: 0;
`;