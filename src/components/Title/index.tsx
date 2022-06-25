import styled from "styled-components";
const Text = styled.h2`
    font-size: 4rem;
    font-family: 'Roboto Slab', serif;
    color: ${props => props.theme.primary};
`;
type props = {
    children: string,
}
const Title = ({ children }: props) => {
    return <Text>{children}</Text>
}
export default Title;