import styled from "styled-components";
import { AiOutlineWarning } from "react-icons/ai";
export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const MapErrorIcon = styled(AiOutlineWarning)`
    width: 50px;
    height: 50px;
    color: ${props => props.theme.light_gray};
`;
export const MapErrorMessage = styled.p`
    font-size: 1.6rem;
    color: ${props => props.theme.light_gray};
`;