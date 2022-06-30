import { FormEvent, useEffect, useId, useRef, useState } from "react";
import * as EmailValidator from 'email-validator';
import Map from "../Map";
import Section from "../Section";
import * as C from "./style";
import { sendMail }  from "../../services/mail";
const Contact = () => {
    const [errorMessage, setErrorMessage] = useState<string>("");

    const nameID = useId();
    const [name, setName] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);

    const emailID = useId();
    const [email, setEmail] = useState<string>("");
    const emailRef = useRef<HTMLInputElement>(null);
    
    const messageID = useId();
    const [message, setMessage] = useState<string>("");
    const messageRef = useRef<HTMLTextAreaElement>(null);

    // controla se todos os dados estao preenchidos
    const [canSendForm, setCanSendForm] = useState<boolean>(false);
    useEffect(()=>{
        if(
            (name.length > 0) && 
            (email.length > 0) && 
            (message.length > 0)
        ){ setCanSendForm(true); }
        else { setCanSendForm(false); }
    }, [name, email, message])

    // enviar formulario
    const sendForm = (e: FormEvent) => {
        e.preventDefault();
        if(!canSendForm){
            setErrorMessage("Você precisa preencher todos os campos do formulario.");
            if(nameRef.current && name.length <= 0){
                nameRef.current.classList.add("error");
            }
            if(emailRef.current && email.length <= 0){
                emailRef.current.classList.add("error");
            }
            if(messageRef.current && message.length <= 0){
                messageRef.current.classList.add("error");
            }
            return;
        }
        setErrorMessage("");
        // verifica se o email é valido
        if(!EmailValidator.validate(email)){
            if(emailRef.current)
            emailRef.current.classList.add("error");
            setErrorMessage("O email digitado é invalido!");
            return;
        }
        // envia o email
        sendMail(name, email, message);
    }
    const focus = (input: HTMLInputElement | HTMLTextAreaElement, placeholderContent?: string)=>{
        input.parentElement?.classList.add("focus");
        if(placeholderContent) input.placeholder = placeholderContent;
    }
    const blur = (input: HTMLInputElement | HTMLTextAreaElement)=>{
        input.parentElement?.classList.remove("focus");
        input.placeholder = "";
        if(input.value.length > 0){
            input.classList.remove("error");
        }
    }
    const isActive = (value: string) => {
        return value.length > 0 ? "active" : ""
    }
    return(
        <Section title="Contato">
            <C.Content>
                <C.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                    Fuga est vitae deserunt quaerat rem culpa numquam nihil provident 
                    molestiae? Numquam Fuga est vitae deserunt quaerat rem culpa numquam nihil provident 
                    molestiae? Numquam
                </C.Text>
                <C.Form onSubmit={(e)=> sendForm(e)}>
                    <C.Input className={isActive(name)}>
                        <label htmlFor={nameID}>Nome</label>
                        <input 
                            onFocus={(e) => focus(e.target, "Digite seu nome")}
                            onBlur={(e) => blur(e.target)}
                            value={name} ref={nameRef}
                            onChange={(e)=>{setName(e.target.value)}}
                            type="text" name="name" id={nameID} />
                    </C.Input>
                    <C.Input className={isActive(email)}>
                        <label htmlFor={emailID}>Email</label>
                        <input 
                            onFocus={(e) => focus(e.target, "Digite seu email")}
                            onBlur={(e) => blur(e.target)}
                            value={email} ref={emailRef}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            type="text" name="name" id={emailID} />
                    </C.Input>
                    <C.Input className={isActive(message)}>
                        <label htmlFor={messageID}>Mensagem</label>
                        <textarea 
                            onFocus={(e) => focus(e.target, "Digite sua mensagem")}
                            onBlur={(e) => blur(e.target)}
                            value={message} ref={messageRef}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            name="message" id={messageID} cols={30} rows={10}>
                        </textarea>
                    </C.Input>
                    {
                        (errorMessage.length > 0 || !canSendForm) &&
                        <C.ErrorMessage>{errorMessage}</C.ErrorMessage>
                    }
                    <C.Submit className={canSendForm ? "" : "no-send"}>Enviar</C.Submit>
                </C.Form>
                <C.ContactOptions>
                    <C.Maps>
                        <Map 
                            location={{lat: -19.43779334037327, lng: -44.2521030313986}}
                        />
                    </C.Maps>
                    <C.Items>
                        <C.InfoItem href="https://goo.gl/maps/yEPybMatrg6J5vNu8" target="_blank">
                            <C.LocationIcon/>
                            <p>
                                Rua: Crisantemo - Numero: 299 <br /> 
                                Bairro: Nossa Senhora do Carmo II <br />
                                Sete Lagoas - MG 
                            </p>
                        </C.InfoItem>
                        <C.InfoItem href="mailto: mayronfernandes01@gmail.com" target="_blank">
                            <C.EmailIcon/>
                            <p>mayronfernandes01@gmail.com</p>
                        </C.InfoItem>
                        <C.InfoItem href="https://api.whatsapp.com/send?phone=5531998046030"  target="_blank">
                            <C.PhoneIcon/>
                            <p>(31) 9 9804-6030</p>
                        </C.InfoItem>
                    </C.Items>
                </C.ContactOptions>
            </C.Content>
        </Section>
    )
}
export default Contact;