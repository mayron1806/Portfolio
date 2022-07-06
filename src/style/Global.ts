import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        /*font-family: 'Roboto Slab', serif;*/
        font-family: 'Ubuntu', sans-serif;
        scroll-behavior: smooth;
    }
    :root{
        --shadow-color: rgba(0,0,0,0.2);
    }
`;