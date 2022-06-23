import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.primary};
    border-radius: 10px;
    padding: 2rem 1rem;
    position: relative;
    height: 200px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: 250px;
    transition: 0.5s;
    :hover{
        height: 300px;
        transform: translateY(20px);
    }
    > img{
        width: 120px;
        height: 120px;
        transition: 0.3s;
        transition-delay: 0.3s;
        position: absolute;
    }
    :hover img{
        width: 150px;
        height: 150px;
        transform: translateY(-40px);
    }
`;
export const Content = styled.div`  
    margin-top: 120px;
    width: 100%;
    text-align: center;
    overflow: hidden;
    color: ${props => props.theme.secondary};
    > h3{
        font-size: 3rem;
        font-weight: 500;
        margin-bottom: 1rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
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