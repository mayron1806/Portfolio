import styled from "styled-components";

export const Container = styled.h2<{reverseColor: boolean}>`
    font-size: 4rem;
    font-family: 'Roboto Slab', serif;
    color: ${props => props.reverseColor ? props.theme.secondary : props.theme.primary};
    @media (max-width: 750px){
        font-size: 3rem;
    }
`;
type props = {
    title: string,
    reverseColor?: boolean
}
const Title = ({title, reverseColor = false} : props) => {
    return <Container reverseColor={reverseColor}>{title}</Container>
}
export default Title;