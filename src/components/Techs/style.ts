import styled, { css } from "styled-components";

import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

export const Container = styled.div`
    background-color: ${props => props.theme.main};
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
const icon = css`
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    color: ${props => props.theme.gray};
    position: absolute;
    height: 100%;
    top: 0;
    transition: 0.5s;
    :hover{
        color: ${props => props.theme.main};
        filter: drop-shadow(0 0 4px ${props => props.theme.gray});
        transform: scale(1.2);
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