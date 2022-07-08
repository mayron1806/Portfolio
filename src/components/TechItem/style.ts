import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
    padding: 2rem 1rem;
    min-width: min(200px, calc(100vw - 4rem));
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: 0.5s;
    :hover{
        transform: translateY(20px);
        height: calc(100% - 40px);
    }
    :hover > div{
        transform: translateY(-40px);
        opacity: 1;
    }
    :hover img{
        width: 150px;
        height: 150px;
    }
    
`;
export const Main = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.3s;
    > img{
        width: 120px;
        height: 120px;
        transition: 0.3s;
    }
    > h3{
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 1rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
    }
`;
export const Content = styled.div`  
    position: absolute;
    padding: 0 1rem;
    opacity: 0;
    transform: translateY(100%);
    bottom: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    transition-delay: 0.2s;
    transition: 0.4s;
    color: ${props => props.theme.secondary};
    > p{
        font-size: 1.6rem;
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
    > a{
        font-size: 1.6rem;
        font-weight: 500;
        color: ${props => props.theme.secondary};
        text-decoration: underline;
    }
`;