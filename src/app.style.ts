import styled from "styled-components";

import wave from "./assets/waves/wave.svg";

export const App = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${props => props.theme.main};
    position: relative;
    .selectors{
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`;
export const Main = styled.main`
    height: calc(100vh - 50px);
    max-width: 100vw;
    overflow: hidden;
    padding: 0 2rem;
    padding-top: 15%;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 2rem;
    position: relative;
    background-color: ${props => props.theme.primary};
    .wave{
        position: absolute;
        bottom: 0;
        left: 0;
        path{
            fill: ${props => props.theme.main};
        }
    }
`;