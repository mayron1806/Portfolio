import styled from "styled-components";

export const App = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.main};
    position: relative;
    .selectors{
        position: fixed;
        width: 50px;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 1rem;
    }
    .content{
        padding-top: 50px;
    }
`;
export const Main = styled.main`
    height: calc(100vh - 50px);
    width: 100%;
`;