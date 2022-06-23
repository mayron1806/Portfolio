import styled, {css} from "styled-components";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";

export const Container = styled.header`
    width: 100%;
    height: 50px;
    background-color: ${props => props.theme.primary};
    border-bottom: 1px solid ${props => props.theme.gray};
    padding: 0 2rem; 
    z-index: 10;
`;

const activeMenu = () => {
    return css`
        ::before{
            transform: rotate(45deg) translate(13px, 0px);
            background-color: ${props => props.theme.primary};
        }
        ::after{
            transform: rotate(-45deg) translate(15px, -3px);
            background-color: ${props => props.theme.primary};
        }
    `;
}
export const MenuToggle = styled.div<{active: boolean}>`
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: 1s;
    ::before, ::after{
        content: "";
        position: absolute;
        height: 7px;
        width: 100%;
        background-color: ${props => props.theme.secondary};
        transition: 0.3s;
    }
    ::before{ top: 20%; }
    ::after{ bottom: 20%; }
    ${props => props.active && activeMenu()}
    
    @media (min-width: 700px){ display: none; }
`;
export const MenuContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 700px){
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: ${props => props.theme.main};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateY(-100%);
        transition: 0.5s;
        &.mobile-menu-active{
            transform: translateY(0%);
        }
    }
`;
export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
    @media (max-width: 700px){
        flex-direction: column;
        align-items: center;
        color:${props => props.theme.primary};
    }
`;
export const MenuOption = styled.li`
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 600;
    border-bottom: 3px solid transparent;
    display: flex;
    align-items: center;
    a{
        line-height: 47px;
        align-content: center;
        color: ${props => props.theme.secondary};
    }
    &.selected, :hover{ 
        border-bottom: 3px solid ${props => props.theme.main};
        a{ color: ${props => props.theme.main}; }
    }
    @media (max-width: 700px){
        font-size: 2rem;
        a{
            color: ${props => props.theme.primary};
            line-height: normal;
        }
        :hover, &.selected{
            border-bottom: 3px solid ${props => props.theme.primary};
            a{ color: ${props => props.theme.primary};}
        }
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    gap: 2rem;
    a{ color: ${props => props.theme.secondary}; }
    @media (max-width: 700px){
        position: absolute;
        bottom: 0;
        a{ color: ${props => props.theme.primary}; }
        margin: 1rem;
    }
`;
const icon = css`
    width: 40px;
    height: 40px;
`;
export const LinkedInIcon = styled(AiFillLinkedin)`
    ${icon}
`;
export const GitHubIcon = styled(AiFillGithub)`
    ${icon}
`;