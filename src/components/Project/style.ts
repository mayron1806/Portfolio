import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 65%;
    grid-template-rows: 30px auto 50px;
    grid-template-areas: 
    "title image"
    "description image"
    "buttons image";
    &.image-left{
        grid-template-areas: 
        "image title"
        "image description"
        "image buttons";
        grid-template-columns: 65% 1fr;
    }
    grid-gap: 1rem;
    width: 100%;
    height: 100%;
    color: ${props => props.theme.primary};
    padding: 1rem;
`;
export const Title = styled.h3`
    grid-area: title;
    font-size: 2.5rem;
    font-weight: 600;
    font-family: 'Roboto Slab', serif;
`;
export const Description = styled.p`
    grid-area: description;
    font-size: 1.5rem;
    justify-self: baseline;
    text-align: justify;
`;
export const ImagesContainer = styled.div`
    overflow: hidden;
    grid-area: image;
    min-height: 100%;
    height: 30vw;
    width: 100%;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar{ height: 0px; }
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    flex: none;
`;
export const Buttons = styled.div`
    grid-area: buttons;
    width: 100%;
    display: flex;
    align-items: stretch;
    gap: 1rem;
`;
export const Link = styled.a`
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    width: 100%;
    padding: 1rem 0;
    font-size: 2rem;
    cursor: pointer;
    text-align: center;
    
    overflow: hidden;
    position: relative;
    z-index: 1;
    transition: 0.3s;
    ::before, ::after{
        content: "";
        position: absolute;
        transform: translate(-50%, -50%) scale(0);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background-color: ${props=> props.theme.primary};
        transition: 0.5s ease;
        z-index: -1;
    }
    ::before{
        top: 100%;
        left: 100%;
    }
    ::after{
        top: 0;
        left: 0;
    }
    &:hover{
        box-shadow: 0 0 10px ${props => props.theme.primary};
        color: ${props=> props.theme.main};
        ::before, ::after{
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;