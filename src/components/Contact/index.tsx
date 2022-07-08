import emailjs from "emailjs-com";
import { FormEvent, useId, useRef, useState } from "react";
import Map from "../Map";
import Pivot from "../Pivot";
import Title from "../Title";
import * as C from "./style";
import { messageType } from "./style";


const Contact = () => {
    const nameID = useId();
    const [name, setName] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);

    const emailID = useId();
    const [email, setEmail] = useState<string>("");
    const emailRef = useRef<HTMLInputElement>(null);
    
    const messageID = useId();
    const [message, setMessage] = useState<string>("");
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const formRef = useRef<HTMLFormElement>(null);

    const [formMessage, setFormMessage] = useState<{message: string, type: messageType}>({message: "", type: messageType.ERROR});

    // envia o formulario
    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if(formRef.current){
            setFormMessage({
                message: "Só um minuto.",
                type: messageType.WAITING
            })

            const service_id = import.meta.env.VITE_SERVICE_ID;
            const template_id = import.meta.env.VITE_TEMPLATE_ID;
            const public_key = import.meta.env.VITE_PUBLIC_KEY;
            
            emailjs.sendForm(service_id, template_id, formRef.current, public_key)
            .then(result => {
                console.log(result);
                setFormMessage({
                    message: "Sua mensagem foi enviada com sucesso.",
                    type: messageType.SUCESS
                })
            })
            .catch(error => {
                console.log(error);
                setFormMessage({
                    message: "Erro ao enviar mensagem tente recarregar a página.",
                    type: messageType.ERROR
                })
            })
        }
    }

    const onInvalid = (e: FormEvent)=>{
        e.preventDefault();

        const target = e.currentTarget as HTMLInputElement;
        target.classList.add("error");

        if(target.validity.valueMissing){
            setFormMessage({
                message: "Você precisa preencher todos os campos do formulario.",
                type: messageType.ERROR
            })
            return;
        }
        // verifica se condiz com o atributo type do elemento e se é do tipo email
        if(target.validity.typeMismatch && target.type === "email"){
            setFormMessage({
                message: "O campo email não está prenchido corretamente.",
                type: messageType.ERROR
            })
            return;
        }
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
    // retorna true caso tenha algo escrito
    const isActive = (value: string) => value.length > 0;

    // retorna true se todos os campos estiverem preenchidos
    const canSendForm = () => name.length > 0 && email.length > 0 && message.length > 0;
    
    return(
        <C.Container>
            <Pivot id="contact"/>
            <Title title="Contato "/>
            <C.Content>
                <C.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                    Fuga est vitae deserunt quaerat rem culpa numquam nihil provident 
                    molestiae? Numquam Fuga est vitae deserunt quaerat rem culpa numquam nihil provident 
                    molestiae? Numquam
                </C.Text>
                <C.Form onSubmit={(e)=> submitForm(e)} ref={formRef}> 
                    <C.Input className={isActive(name) ? "active" : ""}>
                        <label htmlFor={nameID}>Nome</label>
                        <input 
                            onFocus={(e) => focus(e.target, "Digite seu nome")}
                            onBlur={(e) => blur(e.target)}
                            value={name} ref={nameRef}
                            onChange={(e)=>{setName(e.target.value)}}
                            type="text" name="user_name" id={nameID} 
                            onInvalid={(e) => onInvalid(e)} required 
                            autoComplete="off" />
                    </C.Input>
                    <C.Input className={isActive(email) ? "active" : ""}>
                        <label htmlFor={emailID}>Email</label>
                        <input 
                            onFocus={(e) => focus(e.target, "Digite seu email")}
                            onBlur={(e) => blur(e.target)}
                            value={email} ref={emailRef}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            type="email" name="user_email" id={emailID} 
                            onInvalid={(e) => onInvalid(e)} required 
                            autoComplete="off" />
                    </C.Input>
                    <C.Input className={isActive(message) ? "active" : ""}>
                        <label htmlFor={messageID}>Mensagem</label>
                        <textarea 
                            onFocus={(e) => focus(e.target, "Digite sua mensagem")}
                            onBlur={(e) => blur(e.target)}
                            value={message} ref={messageRef}
                            onChange={(e)=>{setMessage(e.target.value)}}
                            name="message" id={messageID} cols={30} rows={10}
                            onInvalid={(e) => onInvalid(e)} required
                            autoComplete="off" >
                        </textarea>
                    </C.Input>
                    {
                        formMessage.message.length > 0 &&
                        <C.Message type={formMessage.type}>{formMessage.message}</C.Message>
                    }
                    <C.Submit className={canSendForm() ? "" : "no-send"}>Enviar</C.Submit>
                </C.Form>
                <C.ContactOptions>
                    <C.Maps>
                        <Map location={{lat: -19.43796099566511, lng: -44.25209879298}}/>
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
        </C.Container>
    )
}
export default Contact;