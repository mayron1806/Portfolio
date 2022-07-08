import styled from "styled-components";

export const Container = styled.h2`
    font-size: 4rem;
    font-family: 'Roboto Slab', serif;
    color: ${props => props.theme.primary};
    @media (max-width: 750px){
        font-size: 3rem;
    }
`;
type props = {
    title: string
}
const Title = ({title} : props) => {
    return <Container>{title}</Container>
}
export default Title;