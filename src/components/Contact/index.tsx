import { useEffect, useId, useState, useCallback } from "react";
import Section from "../Section";
import * as C from "./style";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import googleMapReact from "google-map-react";
const center = {
    lat: -3.745,
    lng: -38.523
  };
  
const Contact = () => {


    const onUnmount = useCallback(function callback(map) {
    setMap(null)
    }, [])
   
    const nameID = useId();
    const [name, setName] = useState<string>("");
    const emailID = useId();
    const [email, setEmail] = useState<string>("");
    const messageID = useId();
    const [message, setMessage] = useState<string>("");

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

    const focus = (input: HTMLInputElement | HTMLTextAreaElement, placeholderContent?: string)=>{
        input.parentElement?.classList.add("focus");
        if(placeholderContent) input.placeholder = placeholderContent;
    }
    const blur = (input: HTMLInputElement | HTMLTextAreaElement)=>{
        input.parentElement?.classList.remove("focus");
        input.placeholder = "";
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
                <C.Form>
                    <C.Input className={isActive(name)}>
                        <label htmlFor={nameID}>Nome</label>
                        <input 
                        onFocus={(e) => focus(e.target, "Digite seu nome")}
                        onBlur={(e) => blur(e.target)}
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                        type="text" name="name" id={nameID} />
                    </C.Input>
                    <C.Input className={isActive(email)}>
                        <label htmlFor={emailID}>Email</label>
                        <input 
                        onFocus={(e) => focus(e.target, "Digite seu email")}
                        onBlur={(e) => blur(e.target)}
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        type="email" name="name" id={emailID} />
                    </C.Input>
                    <C.Input className={isActive(message)}>
                        <label htmlFor={messageID}>Mensagem</label>
                        <textarea 
                        onFocus={(e) => focus(e.target, "Digite sua mensagem")}
                        onBlur={(e) => blur(e.target)}
                        value={message}
                        onChange={(e)=>{setMessage(e.target.value)}}
                        name="message" id={messageID} cols={30} rows={10}></textarea>
                    </C.Input>
                    <C.Submit className={canSendForm ? "" : "no-send"}>Enviar</C.Submit>
                </C.Form>
                <C.ContactOptions>
                    <C.Maps>
                        
                    </C.Maps>
                    <C.Items>
                        <C.InfoItem>
                            <C.LocationIcon/>
                            <p>
                                Rua: Crisantemo - Numero: 299 <br /> 
                                Bairro: Nossa Senhora do Carmo II <br />
                                Sete Lagoas - MG 
                            </p>
                        </C.InfoItem>
                        <C.InfoItem>
                            <C.EmailIcon/>
                            <p>mayronfernandes01@gmail.com</p>
                        </C.InfoItem>
                        <C.InfoItem>
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