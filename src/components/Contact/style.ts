import styled, { css, keyframes } from "styled-components";
import {AiOutlineMail} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {IoLogoWhatsapp} from "react-icons/io5";

export const Container = styled.div`
    padding: 0 2rem;
    position: relative;
`;
export const Content = styled.div`
    color: ${props => props.theme.primary};
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 60% 1fr;
    grid-template-areas: 
    "text text"
    "form contact";
    padding-bottom: 5rem;
    @media (max-width: 850px){
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 750px){
        grid-template-columns: 1fr;
        grid-template-areas: 
        "text"
        "form"
        "contact";
    }
`;
export const Text = styled.p`
    grid-area: text;
    font-size: 1.6rem;
`;
export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: flex-end;
`;
const vibrateAnim = keyframes`
    0%, 50%{ transform: translateX(-10px); }
    25%, 75%{ transform: translateX(10px); }
    100%{ transform: translateX(0px); }
`;
export const Input = styled.div`
    width: 100%;
    position: relative;
    label{
        position: absolute;
        left: 2%;
        top: 0;
        transform: translateY(70%);
        color: ${props => props.theme.primary};
        font-size: 2rem;
        padding: 0 0.5rem;
        background-color: ${props => props.theme.main};
        transition: 0.5s;
    }
    input, textarea{
        width: 100%;
        font-size: 2rem;
        padding: 1.5rem 1rem;
        outline: none;
        border-radius: 5px;
        border: 3px solid ${props => props.theme.primary};
        background-color: transparent;
        color: ${props => props.theme.primary};
        transition: 0.5s;
        &.error{
            border-color: var(--red);
            animation: ${vibrateAnim} 0.2s linear;
        }
    }
    textarea{
        resize: none;
    }
    input::placeholder, textarea::placeholder{
        color: ${props => props.theme.gray};
    }
    &.focus, &.active{
        label{
            top: 0;
            transform: translateY(-50%);
        }
    }
`;
export enum messageType {
    ERROR,
    SUCESS,
    WAITING
}
const color = (type: messageType) => {
    switch(type){
        case messageType.ERROR:
            return css`color: var(--red);`;
        case messageType.SUCESS:
            return css`color: var(--green);`;
        case messageType.WAITING:
            return css`color: var(--yellow);`;
    }
}
export const Message = styled.p<{type : messageType}>`
    align-self: flex-start;
    font-size: 1.6rem;
    ${props => color(props.type)}
`;
export const Submit = styled.button`
    position: relative;
    font-size: 2rem;
    font-weight: 600;
    padding: 1rem;
    border-radius: 30px;
    width: 50%;
    max-width: 400px;
    border: 3px solid ${props => props.theme.primary};
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    ::before{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        background-color: ${props => props.theme.primary};
        border-radius: 50%;
        width: 40rem;
        height: 40rem;
        z-index: -1;
        transition: 1s;
    }
    cursor: pointer;
    pointer-events: all;
    color:  ${props => props.theme.main};
    &.no-send{
        cursor: auto;
        background-color: transparent;
        color: ${props => props.theme.primary};
        ::before{
            transform: translate(-50%, -50%) scale(0);
        }
    }
`;
export const ContactOptions = styled.div`
    grid-area: contact;
    display: flex;
    flex-direction: column;
`;
export const Maps = styled.div`
    aspect-ratio: 16/9;
    width: 100%;
    @media (min-width: 750px) { aspect-ratio: 1/1; }
    @media (max-width: 750px) {
        width: 100%;
        max-height: 40%;
    }
`;
const icon = css`
    width: 30px;
    height: 30px;
    color: ${props => props.theme.primary};
`;
export const LocationIcon = styled(GoLocation)`
    ${icon}
`;
export const EmailIcon = styled(AiOutlineMail)`
    ${icon}
`;
export const PhoneIcon = styled(IoLogoWhatsapp)`
    ${icon}
`;
export const Items = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;
export const InfoItem = styled.a`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 500;
    color: ${props =>props.theme.primary};
`;