import styled, { css } from "styled-components";
import {AiOutlineMail, AiOutlinePhone} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
export const Content = styled.div`
    color: ${props => props.theme.primary};
    padding: 0 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 60% 1fr;
    grid-template-areas: 
    "text text"
    "form contact";
    padding-bottom: 5rem;
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
export const Input = styled.div`
    width: 100%;
    position: relative;
    label{
        position: absolute;
        left: 2%;
        top: 0;
        transform: translateY(50%);
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
        cursor: no-drop;
        pointer-events: none;
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
    width: 100%;
    height: 100%;
    background-color: green;
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
export const PhoneIcon = styled(AiOutlinePhone)`
    ${icon}
`;
export const Items = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
    flex-direction: column;
`;
export const InfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    font-weight: 500;
`;