import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    top: -70px;
    left: 0;
`;
type props = {
    id: string
}
const Pivot = ({ id }: props) => {
    return <Container id={id} />
}
export default Pivot;