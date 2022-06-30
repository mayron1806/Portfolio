import styled, {css, keyframes} from "styled-components";
import {IoSettingsOutline} from "react-icons/io5";
import {MdOutlineDarkMode, MdOutlineLightMode} from "react-icons/md";

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
//rotate animation
const RotationAnim = keyframes`
    from{
        transform: rotate(0deg);
    }to{
        transform: rotate(360deg);
    }
`;
export const Head = styled(IoSettingsOutline)`
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: ${props => props.theme.main};
    border-radius: 50%;
    padding: 1rem;  
    box-shadow: 0 0 10px var(--shadow-color);
    &.active{
        animation: ${RotationAnim} 3s linear infinite;
    }
`;
const icon = css`
    width: 35px;
    height: 35px;
    cursor: pointer;
    :hover, &.active{
        color: ${props => props.theme.main};
    }
`;
export const Dark = styled(MdOutlineDarkMode)`
    ${icon}
`;
export const Light = styled(MdOutlineLightMode)`
    ${icon}
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    gap:1rem;
    
    margin-left: 1rem;
    border-radius: 10px;
    background-color: ${props => props.theme.primary};
    box-shadow: 0 0 5px var(--shadow-color);
    color: ${props => props.theme.gray};
`;