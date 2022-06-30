import styled from "styled-components";

export const Container = styled.div`
    padding: 0 2rem;
`;
export const Title = styled.h2`
    font-size: 4rem;
    font-family: 'Roboto Slab', serif;
    color: ${props => props.theme.primary};
    @media (max-width: 750px){
        font-size: 3rem;
    }
`;