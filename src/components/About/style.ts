import styled, {css} from "styled-components";
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai";

export const Container = styled.div`
    margin: 70px 0;
    position: relative;
    padding: 4rem 2rem;
    background-color: ${props => props.theme.main2};
    svg.wave{
        width: 100%;
        position: absolute;
        transform: translateY(-100%);
        left: 0;
        path{
            fill: ${props => props.theme.main2};
        }
    }
    svg.top{
        top: 0;
    }
    svg.bottom{
        bottom: 0;
        transform: translateY(100%) rotate(180deg);
    }
`;
export const Title = styled.h2`
    font-size: 4rem;
    font-family: 'Roboto Slab', serif;
    color: ${props => props.theme.primary};
`;
export const Content = styled.div`
    margin: 2rem 3rem;
    margin-bottom: 0;
    display: flex;
    gap: 2rem;
    
`;
export const Image = styled.img`
    width: 35vw;
    height: 35vw;
    border-radius: 50%;
    flex: none;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .button-container{
        width: 100%;  
        display: flex;
        gap: 2rem;
    }
`;
export const Text = styled.div`
    color: ${props => props.theme.primary};
    h3{
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    p{
        font-size: 1.6rem;
        text-align: justify;
    }
`;
export const Button = styled.a<{backgroundColor: string}>`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.theme.primary};
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: 0.5s;
    outline: none;
    :hover{
        filter: brightness(1.2);
    }
`;
const Icon = css`
    width: 30px;
    height: 30px;
`;
export const GitHubIcon = styled(AiOutlineGithub)`
    ${Icon}
`;
export const LinkedInIcon = styled(AiFillLinkedin)`
    ${Icon}
`;