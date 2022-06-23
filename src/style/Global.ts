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
        --blue: #0887DC;
        --light-blue: #4DA6E1;
        --white: #F5F5F5;
        --gray: #D3D3D3;
        --light-gray: #ECECEC;
        --black: #1E1E1E;
        --shadow-color: rgba(0, 0, 0, 0.5);
    }
`;