import styled from "styled-components";
import {BiBrushAlt} from "react-icons/bi";
export const Container = styled.section`
    display: flex;
    align-items: center;
    color: ${props => props.theme.primary};
    transform: translateX(calc(100% - 55px));
    transition: 0.5s ease;
    &.active{
        transform: translateX(calc(0% - 5px));
    }
`;  
export const Head = styled(BiBrushAlt)` 
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: ${props => props.theme.main};
    border-radius: 50%;
    padding: 1rem;  
    box-shadow: 0 0 10px var(--shadow-color);
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 0.7rem 1rem;
    gap: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0 0 5px var(--shadow-color);
    color: ${props => props.theme.gray};
`;
export const Color = styled.div<{color: string}>`
    background-color: ${props => props.color};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    &.selected{
        ::before{
            content: "";
            width: 110%;
            height: 110%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            border: 2px solid ${props => props.theme.main};
        }
    }
`;