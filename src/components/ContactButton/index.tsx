import styled from "styled-components";
const Button = styled.a`
    color: ${props => props.theme.secondary};
    font-size: 2rem;
    background-color: transparent;
    border: 2px solid ${props => props.theme.secondary};
    border-radius: 10px;
    padding: .4rem 1.5rem;
    transition: 0.4s;
    position: relative;
    overflow: hidden;
    z-index: 1;
    ::before{
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: 0;
        left: 0;
        background-color: ${props => props.theme.main};
        transform: translate(-100%);
        z-index: -1;
        transition: 0.7s ease;
    }
    :hover{
        ::before{
            transform: translate(0%);
        }
        color: ${props => props.theme.primary};
        border: 2px solid ${props => props.theme.main};
    }
`;
const ContactButton = () => {
    return(
        <Button href="#">
            Contate-me
        </Button>
    )
}
export default ContactButton;