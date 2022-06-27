import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 0 2rem;
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2rem;
    position: relative;
    background-color: ${props => props.theme.primary};
    .wave{
        position: absolute;
        bottom: 0;
        left: 0;
        path{
            fill: ${props => props.theme.main};
        }
    }
`;
export const Link = styled.a`
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    background-color: transparent;
    border: 2px solid ${props => props.theme.secondary};
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
        left: 0;
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